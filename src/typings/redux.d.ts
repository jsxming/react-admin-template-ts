/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-11-01 14:52:50
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-04 16:59:30
 */


export type IAuthItem ={
    id:number;
    path:string;
    label:string;
    parentId:number;
    children?:IAuthItem[];
}

export interface IStore{
    token:string
    hiddenMenu:boolean
    auth:IAuthItem[]
    authPath:string[]
}