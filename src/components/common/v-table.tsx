/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-22 17:37:43
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-22 18:00:57
 */
import React, { useEffect } from 'react';
import { Spin, Table, Pagination, } from 'antd';

interface Params{
    total:number;
    size:number;
    current:number;
}

interface IProps{
    height?:number;
    width?:number;
    defaultPageSize?:number;
    isShowPage?:boolean;
    isAutoLoad?:boolean;
    queryParams:Params;
    getTableData:(pa?:any)=>void;
    loading?:boolean;
    columns:any[];
    tableData?:any[];
}

export default function VTable(props:IProps={
    defaultPageSize: 10,
    columns:[],
    queryParams: {
        total: 0,
        current: 1,
        size:20
    },
    getTableData:()=>{},
    width: 1500,
    height: 586,
    isAutoLoad: true,
    isShowPage: true,
}) {
    useEffect(()=>{
        if (props.isAutoLoad) {
            props.getTableData();
        }
    },[]);

    function pageChange(page:number,size?:number) {
        props.getTableData({ page,size });
    }

    const {
        loading,
        tableData,
        columns,
        defaultPageSize,
        queryParams,
        isShowPage,
        width,
        height,
    } = props;
    return (
        <>
            <Spin spinning={loading}>
                <Table
                    columns={columns}
                    dataSource={tableData}
                    pagination={false}
                    rowKey={row => row.id}
                    scroll={{ x: width,y:height }}
                />
            </Spin>
            <footer className="flex-center"
                style={{ padding: '15px 0', }}
            >
                <div
                    style={{marginRight:'15px'}}>
                    共<span style={{ color: '#1890ff', }}> {queryParams.total} </span>条
                </div>
                {
                    isShowPage &&
                        <Pagination
                            current={queryParams.current}
                            defaultCurrent={1}
                            defaultPageSize={defaultPageSize}
                            onChange={pageChange}
                            pageSizeOptions={['1','10','20','50','100']}
                            showQuickJumper
                            showSizeChanger
                            total={queryParams.total}
                        />
                }

            </footer>
        </>
    );
}