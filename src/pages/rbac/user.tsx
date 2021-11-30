/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-28 17:23:45
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-30 15:09:10
 */
import React,{useState,useMemo,useEffect} from 'react';
import API from '@/api';
import VTable from '@/components/common/v-table';
import {Button,Modal,Form,Select} from 'antd';
import {IRoleItem} from '@/typings/redux';
import useModalForm from '@/hooks/useModalForm';

interface IUser{
    id:number;
    name:string;
    tel:string;
    roleId:number[];
}


export default function User(){
    const [tableLoading,setTableLoading] = useState(false);
    const [tableData,setTableData] = useState([]);
    const [role,setRole] = useState<IRoleItem[]>([]);
    const [form] = Form.useForm();

    const [queryParams,setQueryParams] = useState({
        current: 1,
        size: 20,
        total: 0
    });
    function getTableData(params?:Global.Obj) {
        setTableLoading(true);
        const query = {
            ...queryParams,
            ...params
        };
        API.queryUsers().then((res) => {
            setTableData(res);
            setQueryParams({...query,total:+res.length});
        }).catch(() => {

        }).finally(()=>{
            setTableLoading(false);
        });
    }

    const {visible,open,submit,formdata,close} = useModalForm<IUser>({
        form:form,
        update:(values,row)=>{
            if(values.roleId===row?.roleId)return Promise.resolve(true);
            return new Promise(resolve=>{
                API.updateUserRole({
                    userId:row?.id,
                    roleId:values.roleId
                }).then(() => {
                    getTableData();
                    resolve(false);
                }).catch(() => {

                });
            });
        }
    });


    useEffect(() => {
        API.queryRoleAll().then((res) => {
            setRole(res);
        }).catch(() => {

        });
    }, []);

    const queryUserRole = function(row:IUser){
        API.queryUserRole(row.id).then((res) => {
            row.roleId = res;
            open(true,row);
        }).catch(() => {

        });
    };

    const columns = useMemo(()=>{
        return [
            {
                title:'ID',
                dataIndex:'id',
                key:'id'
            },
            {
                title:'name',
                dataIndex:'name',
                key:'name'
            },
            {
                title:'电话',
                dataIndex:'tel',
                key:'tel'
            },

            {
                title:'操作',
                render:(row:IUser)=>{
                    return <Button onClick={()=>queryUserRole(row)}>绑定角色</Button>;
                }
            }
        ];
    },[]);

    return <>
        <VTable
            columns={columns}
            getTableData={getTableData}
            isAutoLoad
            loading={tableLoading}
            queryParams={queryParams}
            tableData={tableData}
        ></VTable>

        <Modal
            maskClosable={false}
            onCancel={close}
            onOk={()=>{
                form.submit();
            }}
            title="修改权限"
            visible={visible}
            width={400}
        >
            <Form
                form={form}
                initialValues={formdata}

                onFinish={submit} >
                <Form.Item label="角色"
                    name="roleId">
                    <Select
                        allowClear
                        mode="multiple"
                    >
                        {
                            role.map(item=>{
                                return <Select.Option key={item.roleName}
                                    value={item.id}>{item.roleName}</Select.Option>;
                            })
                        }

                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    </>;
}