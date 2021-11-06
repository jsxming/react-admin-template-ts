/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-11-06 10:46:31
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-06 17:27:27
 */
import React,{useEffect,useState} from 'react';
import {Button} from 'antd';
import VTable from '@/components/common/v-table';
import API from '@/api';

function useTable(columns:any[],func:Function){
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
    return [t,getTableData];
}

export default function Auth(){
    const [Table] = useTable([
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
            render:(v:any)=>{
                return <div>

                    <Button onClick={()=>{
                        console.log(v);
                    }} >修改</Button>
                    <Button danger
                        onClick={()=>{
                            console.log(v);
                        }} >删除</Button>
                </div>;
            }
        },
    ],API.queryAuthAll);

    return (
        <>
            {
                Table
            }
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