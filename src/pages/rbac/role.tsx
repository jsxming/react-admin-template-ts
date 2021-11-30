/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-22 11:15:28
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-30 14:34:49
 */
import React, { useMemo, useState,useEffect, CSSProperties } from 'react';
import VTable from '@/components/common/v-table';
import API from '@/api';
import {Button,Drawer,Checkbox,message,Row,Col} from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import {IAuthItem,IRoleItem} from '@/typings/redux';




type RoleAuth = {
    id:number;
    roleId:number;
    authId:number;
}


const btnStyle:CSSProperties = {
    position:'absolute',
    bottom:50,
    width:240,
    left:'50%',
    transform:'translateX(-50%)'
};


type IKeys = {
    [propsname:string]:IAuthItem[]|undefined
}

interface TreeNode extends IAuthItem{
    dept:number
}

function AuthTree(props:TreeNode){
    if(props.children){
        return <Row style={{marginLeft:props.dept*15,width:'100%'}}>
            <Col span={props.children? 24 : 6}>
                <Checkbox value={props.id}>{props.label}</Checkbox>
            </Col>
            {
                props.children.map(item=>{
                    return <AuthTree {...item}
                        dept={props.dept+1}
                        key={item.id}/>;
                })
            }
        </Row>;
    }else{
        return <Col span={props.path==='component' ? 3:24}
            style={{marginLeft:props.dept*15}}>
            <Checkbox value={props.id}>{props.label}</Checkbox>
        </Col>;
    }
}

export default function Role(){
    const [visible, setVisible] = useState(false);
    const [clickedRow, setClickedRow] = useState<IRoleItem>();
    const [tableLoading,setTableLoading] = useState(false);
    const [tableData,setTableData] = useState<IAuthItem[]>([]);
    const [currentAuth, setCurrentAuth] = useState<number[]>([]);
    const [queryParams,setQueryParams] = useState({
        current: 1,
        size: 20,
        total: 0
    });
    const [auth, setauth] = useState<IAuthItem[]>([]);

    useEffect(() => {
        API.queryAuthAll().then((res:IAuthItem[]) => {
            setauth(res);
        }).catch(() => {

        });
    }, []);

    function queryRoleAuth(id:number){
        API.queryRoleAuth(id).then((res:RoleAuth[]) => {
            setVisible(true);
            const result = res.map(item=>item.authId);
            setCurrentAuth(result);
        }).catch(() => {

        });
    }

    function getTableData(params:Global.Obj) {
        setTableLoading(true);
        const query = {
            ...queryParams,
            ...params
        };
        API.queryRoleAll().then((res) => {
            setTableData(res);
            setQueryParams({...query,total:+res.length});
        }).catch(() => {

        }).finally(()=>{
            setTableLoading(false);
        });
    }

    function updateRoleAuth(){
        // console.log(currentAuth);
        // return;
        API.updateRoleAuth({
            roleId:clickedRow?.id,
            auth:currentAuth,
        }).then(() => {
            message.success('保存成功');
        }).catch(() => {

        });
    }

    function openDrawer(row:IRoleItem){
        setVisible(true);
        queryRoleAuth(row.id);
        setClickedRow(row);
    }

    const columns = useMemo(()=>{
        return [
            {
                title:'ID',
                dataIndex:'id',
                key:'id'
            },
            {
                title:'角色名称',
                dataIndex:'roleName',
                key:'roleName'
            },
            {
                title:'操作',
                render:(row:IRoleItem)=>{
                    return <div>
                        <Button onClick={()=>openDrawer(row)}
                            type="primary">绑定权限</Button>
                    </div>;
                }
            },
        ];
    },[]);

    function handleChange(e:CheckboxValueType[]){
        setCurrentAuth(e as number[]);
    }

    return (
        <>
            <VTable
                columns={columns}
                getTableData={getTableData}
                isAutoLoad
                loading={tableLoading}
                queryParams={queryParams}
                tableData={tableData}
            ></VTable>
            <Drawer
                onClose={()=>setVisible(false)}
                placement="right"
                title={`【${clickedRow?.roleName}】- 权限设置`}
                visible={visible}
                width="calc(100vw - 256px)"
            >
                <Checkbox.Group onChange={handleChange}
                    style={{ width: '100%' }}
                    value={currentAuth}>
                    <Button onClick={updateRoleAuth}
                        size="large"
                        style={btnStyle}
                        type="primary"  >保存</Button>
                    {
                        auth.map(item=>{
                            return <AuthTree {...item}
                                dept={0}
                                key={item.id} />;
                        })
                    }
                </Checkbox.Group>
            </Drawer>
        </>
    );
}