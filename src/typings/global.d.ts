/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-01 15:25:05
 */

/// <reference types="react" />

declare module 'react-color';

declare namespace Global{
    interface Test{
        id:number;
        render:()=>React.ReactElement
    }
    interface ITableColumn<T> {
        key:string;
        title:string;
        render?:(value:any,row:T)=>React.FC;
    }
    interface Obj {
        [propsname: string]: any
    }

}

declare interface Window {
    less:any;
}

declare module  '*.less'