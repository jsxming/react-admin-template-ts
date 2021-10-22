/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-22 17:22:22
 */
import React,{useEffect,lazy} from 'react';
import {Button} from 'antd';
import {Link, NavLink} from 'react-router-dom';
import useUpload from '@/hooks/useUpload';
import LayoutMain from '@/components/layout/Main';
import API from '@/api/index';
import { isArray,isValidValue } from '@/util/index';
import { RouteItem } from '@/typings/route';
import { Routes } from '@/routes/index';

import {
    Route,
    Switch,
    useRouteMatch
} from 'react-router-dom';
// import Test from './pages/Test';


function hasChildren(route:RouteItem):boolean {
    return isArray(route.children);
}

function hasComponent(item:RouteItem):boolean{
    return isValidValue(item.component);
}

function createRoute(arr:RouteItem[],result:React.ReactElement[]){
    arr.forEach(item=>{
        if(hasComponent(item)){
            result.push(<Route children={item.component}
                exact
                key={item.path}
                path={item.path}></Route>);
        }
        if(hasChildren(item) && item.children!==undefined){
            createRoute(item.children,result);
        }
    });
}

function createRoutes():React.ReactElement[]{
    const result:React.ReactElement[] = [];
    createRoute(Routes,result);
    return result;
}


function App() {
    // const test = useUpload({
    //     maxSize:100,
    //     upload:()=>{},
    // });
    const { path, url } = useRouteMatch();

    useEffect(()=>{
        console.log(path,url);
        // API.queryAuthAll().then((res) => {
        //     console.log(res);
        // }).catch(() => {

        // });
    },[]);
    return (
        <LayoutMain>
            <>
                <Link to={'/rbac/role'}>aaaaa</Link>
                <Link to={'/b'}>bbbb</Link>

                <Switch>
                    {createRoutes()}

                    {/* <Route exact
                        path="/rbac/role">
                        <h1>aaaaaaa</h1>
                    </Route> */}
                    <Route exact
                        path="/b">
                        <h1>bbbbbb</h1>
                    </Route>
                </Switch>
            </>
        </LayoutMain>
    );
}

export default App;
