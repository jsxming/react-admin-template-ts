/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-06 10:11:59
 */
import React,{useEffect} from 'react';
import {Spin} from 'antd';
import LayoutMain from '@/components/layout/Main';
import { isArray,isValidValue } from '@/util/index';
import { RouteItem } from '@/typings/route';
import { Routes } from '@/routes/index';
import useHasAuth from '@/hooks/useHasAuth';
import {useLocation} from 'react-router-dom';
import {
    Route,
    Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from './typings/redux';
import { SET_CURRENT_PAGE_COMPONENT_AUTH } from './redux/action-type';


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
    const {pathname} = useLocation();
    const auth = useSelector((state:IStore)=>state.auth);
    const pageComponentAuth = useSelector((state:IStore)=>state.pageComponentAuth);
    const dispatch = useDispatch();
    useEffect(()=>{
        const el = auth.find(item=>item.path ===pathname);
        if(typeof el !=='undefined'){
            dispatch({type:SET_CURRENT_PAGE_COMPONENT_AUTH,payload:pageComponentAuth[el.id]||[]});
        }

    },[pathname,auth,pageComponentAuth,dispatch]);
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
