/*
 * @Description: 权限组件
 * @Autor: 小明～
 * @Date: 2021-10-27 14:32:28
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-04 11:02:03
 */
import React from 'react';

type IProps = {
    id:string;
    children:React.ReactElement;
}

const arr =['1','2','3']; //模拟当前页面权限

export default function AuthComponent(props:IProps):React.ReactElement | null {
    return arr.includes(props.id) ? props.children :null;
}
