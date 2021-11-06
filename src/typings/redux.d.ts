/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-11-01 14:52:50
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-06 09:43:40
 */


export type IAuthItem ={
    id:number;
    path:string;
    label:string;
    parentId:number;
    isPage:0|1,
    children?:IAuthItem[];
}

export type IComponentAuthCache = {
    [propsname:string]:IAuthItem[]
}

export interface IStore{
    token:string
    hiddenMenu:boolean
    auth:IAuthItem[]
    authPath:string[],
    pageComponentAuth:IComponentAuthCache,
    currentPageComponentAuth:IAuthItem[]
}