/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-11-06 10:46:31
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-30 11:48:15
 */
import React,{useEffect,useState} from 'react';
import {Button,Popconfirm,TableColumnType,Modal,Form,Input, notification, message} from 'antd';
import VTable from '@/components/common/v-table';
import {DeleteOutlined,EditOutlined} from '@ant-design/icons';
import API from '@/api';
import useModalForm from '@/hooks/useModalForm';

function useTable<T>(func:Function,columns:TableColumnType<T>[]){
    const [tableLoading,setTableLoading] = useState(false);
    const [tableData,setTableData] = useState([]);

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
        func().then((res:any) => {
            setTableData(res);
            setQueryParams({...query,total:+res.length});
        }).catch(() => {

        }).finally(()=>{
            setTableLoading(false);
        });
    }

    const t = <VTable
        columns={columns}
        getTableData={getTableData}
        isAutoLoad
        loading={tableLoading}
        queryParams={queryParams}
        tableData={tableData}
    ></VTable>;
    return {Table:t,getTableData};
}




console.log(useModalForm);
interface IAuthRow{
    id:number
    label:string;
    path:string;
    children?:IAuthRow[];
}

export default function Auth(){
    const [form] = Form.useForm();




    const {Table,getTableData} = useTable<IAuthRow>(API.queryAuthAll,[
        {
            title:'ID',
            dataIndex:'id',
            key:'id'
        },
        {
            title:'Label',
            dataIndex:'label',
            key:'label'
        },
        {
            title:'Path',
            dataIndex:'path',
            key:'path'
        },
        {
            title:'操作',
            render:(v:IAuthRow)=>{
                return <div>

                    <Button
                        className="mr-15"
                        icon={<EditOutlined />}
                        onClick={()=>{
                            open(true,v);
                        }}
                        shape="circle"
                        type="primary" ></Button>
                    <Popconfirm
                        cancelText="取消"
                        okText="确认"
                        onConfirm={()=>delRow(v)}
                        title="您确定要删除该行数据吗?"
                    >
                        <Button
                            danger
                            icon={<DeleteOutlined className="table-icon" />}
                            shape="circle"
                            type="primary" >

                        </Button>
                    </Popconfirm>

                </div>;
            }
        },
    ]);

    const {visible,open,submit,formdata,close} = useModalForm<IAuthRow>({
        form:form,
        update:(values,row)=>{
            return new Promise(resolve=>{
                if(typeof row !=='undefined'){
                    values.id=row.id;
                }
                API.updateAuth(values).then(() => {
                    message.success('修改成功');
                    getTableData();
                    resolve(false);
                }).catch(() => {

                });

            });
        }
    });

    function delRow(v:IAuthRow){
        console.log(v);
        API.delAuth(v.id).then((res) => {
            // console.log(res);
            getTableData();
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <>
            {
                Table
            }
            <Modal
                onCancel={close}
                onOk={()=>{
                    console.log(123);
                    form.submit();
                }}
                title="修改权限"
                visible={visible}
                width={400}
            >
                <Form
                    form={form}
                    initialValues={formdata}
                    onFinish={submit}
                >
                    <Form.Item label="path"
                        name="path">
                        <Input  />
                    </Form.Item>
                    <Form.Item label="Label"
                        name="label">
                        <Input  />
                    </Form.Item>
                </Form>
            </Modal>
            {/* <VTable
                columns={columns}
                getTableData={getTableData}
                isAutoLoad
                loading={tableLoading}
                queryParams={queryParams}
                tableData={tableData}
            ></VTable> */}
        </>
    );
}