import React from 'react';

/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-29 15:24:04
 */
export interface Obj {
    [propsname: string]: any
}


declare interface ITableColumn<T> {
    key:string;
    title:string;
    render?:(value:any,row:T)=>React.FC;
}

declare namespace Global{
    interface Test{
        id:number;
    }
}