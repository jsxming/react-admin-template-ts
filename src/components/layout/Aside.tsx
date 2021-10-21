/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-21 16:39:34
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-21 17:21:48
 */

import React from 'react';
import {Layout,Menu} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Sider } = Layout;

export default function LayoutAside(){
    return (
        <Sider
            className="site-layout-background"
            width={200}
        >
            <Menu
                defaultOpenKeys={['sub1']}
                defaultSelectedKeys={['1']}
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu icon={<UserOutlined />}
                    key="sub1"
                    title="subnav 1">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu icon={<LaptopOutlined />}
                    key="sub2"
                    title="subnav 2">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu icon={<NotificationOutlined />}
                    key="sub3"
                    title="subnav 3">
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
}