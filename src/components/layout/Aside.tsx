import React, { useState } from 'react';
import { Menu } from 'antd';
import { Routes } from '@/routes/index';
import { isArray } from '@/util/index';
import { useHistory, useLocation } from 'react-router-dom';
import { RouteItem } from '@/typings/route';
import {useSelector} from 'react-redux';
import {  IStore } from '@/typings/redux';
import useHasAuth from '@/hooks/useHasAuth';


// const rootSubmenuKeys = ['/rbac'];

const { SubMenu } = Menu;

function hasChildren(route:RouteItem):boolean {
    return isArray(route.children) && !route.hiddenChildren;
}

function hasIcon(item:RouteItem) {
    return item.icon ? item.icon : null;
}


function createMenuItem(item:RouteItem) {
    if(!useHasAuth(item.path)){
        return;
    }
    return <Menu.Item
        icon={hasIcon(item)}
        key={item.path}
    >
        {item.title}
    </Menu.Item>;
}


function createSubMenu(route:RouteItem) {
    return <SubMenu
        icon={route.icon}
        key={route.path}
        title={route.title}
    >
        {
            route.children?.map((item) => {
                //两级导航
                // return createMenuItem(item);
                //多级导航用下面的代码 ！！！
                if (hasChildren(item)) {
                    return createSubMenu(item);
                } else {
                    return createMenuItem(item);
                }
            })
        }
    </SubMenu>;
}



function CreateMenu() {
    const result = [];
    console.log(Routes);
    for (let i = 0; i < Routes.length; i++) {
        const item = Routes[i];
        if(!useHasAuth(item.path)){
            continue;
        }
        if (hasChildren(item)) {
            result.push(createSubMenu(item));
        } else {
            result.push(createMenuItem(item));
        }
    }
    return result;
}


export default function VMenu() {
    const l = useLocation();
    const auth = useSelector((state:IStore)=>state.auth);

    const [rootSubmenuKeys] = useState<string[]>(auth.filter(item=>{
        return item.parentId===0;
    }).map(item=>item.path));

    // console.log(rootSubmenuKeys,'asfg');
    const rootPath = '/' + l.pathname.split('/')[1];
    const defaultOpenKeys = rootSubmenuKeys.find(item => rootPath.includes(item)) || '/';
    const history = useHistory();
    const [openKeys, setOpenKeys] = useState<string[]>([defaultOpenKeys]);
    const go = (val:any) => {
        if (history.location.pathname === val.key) return;
        history.push(val.key);
    };

    const hiddenMenu = useSelector((state:IStore) => state.hiddenMenu);

    // 控制 只能展开一个子菜单
    const onOpenChange = (val:React.Key[]) => {
        const arr= (val as string[]);
        const latestOpenKey = arr.find((key) => openKeys.indexOf(key) === -1) ||'';
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(arr);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            defaultSelectedKeys={[l.pathname]}
            inlineCollapsed={hiddenMenu}
            mode="inline"
            onClick={go}
            onOpenChange={onOpenChange}
            openKeys={openKeys}
            style={{ maxWidth:256,minHeight:'100vh' }}
            theme="dark"
        >
            <div style={{
                height:60,
                lineHeight:'60px',
                textAlign:'center'
            }}>
                logo
            </div>
            {
                CreateMenu()
            }
        </Menu>


    );
}