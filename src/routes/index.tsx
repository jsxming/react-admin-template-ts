/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-22 11:06:45
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-22 17:12:29
 */
import React, { lazy } from 'react';
import { RouteItem } from '@/typings/route';

import { UserOutlined, LaptopOutlined, } from '@ant-design/icons';
// import AsyncComponent from '@/components/AsyncComponent/index';

const App = lazy(() => import('@/App.tsx'));
const Role = lazy(() => import('@/pages/rbac/role.tsx'));
// const Article = AsyncComponent(() => import('@/view/article/article'));
// const Student = AsyncComponent(() => import('@/view/student/student'));
// const Product = AsyncComponent(() => import('@/view/product/product'));
// const ProductEdit = AsyncComponent(() => import('@/view/product/edit'));




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
                title: '角色管理',
                path: '/rbac/role',
                icon: <LaptopOutlined />,
                component:<Role/>,
            }
        ]
    },
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