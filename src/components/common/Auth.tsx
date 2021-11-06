/*
 * @Description: 权限组件
 * @Autor: 小明～
 * @Date: 2021-10-27 14:32:28
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-06 10:26:59
 */
import { IStore } from '@/typings/redux';
import React from 'react';
import { useSelector } from 'react-redux';

type IProps = {
    id:number;
    children:React.ReactElement;
}

export default function AuthComponent(props:IProps):React.ReactElement | null {
    const currentPageComponentAuth = useSelector((state:IStore)=>state.currentPageComponentAuth);
    return currentPageComponentAuth.some(item=>item.id===props.id) ? props.children : null;
}
