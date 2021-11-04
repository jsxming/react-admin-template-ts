/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-28 17:23:45
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-04 10:54:15
 */
import React,{useState,useMemo} from 'react';
import API from '@/api';
import VTable from '@/components/common/v-table';
import {Button} from 'antd';
import Auth from '@/components/common/Auth';



export default function User(){
    const [tableLoading,setTableLoading] = useState(false);
    const [tableData,setTableData] = useState([]);
    const [queryParams,setQueryParams] = useState({
        current: 1,
        size: 20,
        total: 0
    });
    function getTableData(params:Global.Obj) {
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
                title:'昵称',
                dataIndex:'nick_name',
                key:'nick_name'
            },
            {
                title:'操作',
                render:()=>{
                    return <Button>绑定角色</Button>;
                }
            }
        ];
    },[]);
    return <>
        <h1>user</h1>
        <VTable
            columns={columns}
            getTableData={getTableData}
            isAutoLoad
            loading={tableLoading}
            queryParams={queryParams}
            tableData={tableData}
        ></VTable>
        <Auth id="1">
            <h1>111</h1>
        </Auth>
        <Auth id="2">
            <h1>222</h1>
        </Auth>
        <Auth id="3">
            <h1>333</h1>
        </Auth>
        <Auth id="4">
            <h1>44</h1>
        </Auth>
    </>;
}