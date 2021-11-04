/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-04 17:09:39
 */
import React from 'react';
import {Spin} from 'antd';
import LayoutMain from '@/components/layout/Main';
import { isArray,isValidValue } from '@/util/index';
import { RouteItem } from '@/typings/route';
import { Routes } from '@/routes/index';
import useHasAuth from '@/hooks/useHasAuth';


import {
    Route,
    Switch,
} from 'react-router-dom';


function hasChildren(route:RouteItem):boolean {
    return isArray(route.children);
}

function hasComponent(item:RouteItem):boolean{
    return isValidValue(item.component);
}

function createRoute(arr:RouteItem[],result:React.ReactElement[]){
    arr.forEach(item=>{
        if(hasComponent(item) && useHasAuth(item.path)){
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
    return (
        <LayoutMain>
            <React.Suspense
                fallback={
                    <Spin
                        size="large"
                    />
                }
            >
                <Switch>
                    {createRoutes()}
                    <Route exact
                        path="/*">
                        <h1>404</h1>
                    </Route>
                </Switch>
            </React.Suspense>
        </LayoutMain>
    );
}

export default App;
