/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-22 11:21:50
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-22 11:37:40
 */
import React from 'react';

/**
 * 字段说明
 * title
 * path
 * icon 导航图标
 * component 组件
 * children 子组件
 * hiddenChildren default:undefined，true 的时候不显示该导航下的children
 */
interface RouteItem {
    title:string;
    path:string;
    icon?:React.ReactElement;
    component?:React.ReactElement;
    children?:RouteItem[];
    hiddenChildren?:boolean;
}