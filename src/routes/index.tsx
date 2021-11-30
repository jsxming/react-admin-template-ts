/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-22 11:06:45
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-29 15:15:49
 */
import React, { lazy } from 'react';
import { RouteItem } from '@/typings/route';

import { UserOutlined, LaptopOutlined, } from '@ant-design/icons';
// import Role from '@/pages/rbac/role.tsx';
// import User from '@/pages/rbac/user.tsx';
const App = lazy(() => import('@/App.tsx'));
const Role = lazy(() => import('@/pages/rbac/role.tsx'));
const Auth = lazy(() => import('@/pages/rbac/auth.tsx'));
const User = lazy(() => import('@/pages/rbac/user.tsx'));
const Test = lazy(() => import('@/pages/Test/index.tsx'));
const SContext = lazy(() => import('@/pages/study/useContext.tsx'));
const Reactuse = lazy(() => import('@/pages/study/reactuse/index.tsx'));






export const Routes:RouteItem[] = [
    // {
    //     title: '首页',
    //     path: '/home',
    //     icon: <UserOutlined />,
    //     component:<App/>,
    // },
    {
        title: 'rbac',
        path: '/rbac',
        icon: <LaptopOutlined />,
        children:[
            {
                title: '用户管理',
                path: '/rbac/user',
                component:<User/>,
            },
            {
                title: '角色管理',
                path: '/rbac/role',
                component:<Role/>,
            },
            {
                title: ' 权限管理',
                path: '/rbac/auth',
                component:<Auth/>,
            },
        ]
    },
    {
        title: 'test',
        path: '/test',
        icon: <LaptopOutlined />,
        component:<Test/>,
    },
    {
        title: 'study',
        path: '/study',
        icon: <LaptopOutlined />,
        children:[
            {
                title: 'useContext',
                path: '/study/useContext',
                component:<SContext/>,
            },
            {
                title: 'React-use',
                path: '/study/reactuse/index',
                component:<Reactuse/>,
            },
        ]
        // component:<Test/>,
    }
    // {
    //     title: '文章',
    //     path: '/article',
    //     icon: <LaptopOutlined />,
    //     component: <Article />
    // },
    // {
    //     title:'学员管理',
    //     path:'/student',
    //     icon:<LaptopOutlined />,
    //     component:<Student/>
    // },
    // {
    //     title:'商品管理',
    //     path:'/product',
    //     icon:<LaptopOutlined />,
    //     component:<Product/>,
    //     hiddenChildren:true,
    //     children:[
    //         {
    //             title:'编辑商品',
    //             path:'/product/edit/:id',
    //             component:<ProductEdit/>
    //         }
    //     ]
    // },
];