/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-22 11:15:28
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-28 17:26:49
 */
import React, { useMemo, useState } from 'react';
import VTable from '@/components/common/v-table';
import { Obj } from '@/typings/global';
import API from '@/api';

export default function Role(){
    const [tableLoading,setTableLoading] = useState(false);
    const [tableData,setTableData] = useState([]);
    const [queryParams,setQueryParams] = useState({
        current: 1,
        size: 20,
        total: 0
    });
    function getTableData(params:Obj) {
        setTableLoading(true);
        const query = {
            ...queryParams,
            ...params
        };
        API.queryAuthAll().then((res) => {
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
                title:'label',
                dataIndex:'label',
                key:'label'
            },
            {
                title:'path',
                dataIndex:'path',
                key:'path'
            },
        ];
    },[]);

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
        </>
    );
}