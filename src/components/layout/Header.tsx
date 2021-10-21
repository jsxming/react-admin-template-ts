/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-21 16:38:59
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-21 17:22:44
 */
import React from 'react';
import {Layout,Menu} from 'antd';
const { Header,  } = Layout;

export default function LayoutHeader(){
    return (
        <Header className="header">
            <div className="logo" />
            <Menu defaultSelectedKeys={['2']}
                mode="horizontal"
                theme="dark">
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
    );
}