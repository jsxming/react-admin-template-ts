/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-21 16:35:13
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-03 16:11:19
 */

import React,{useEffect} from 'react';
import Aside from './Aside';
import Header from './Header';

// import { isArray } from '@/util/index';

import  './main.less';

interface IProps {
    children:React.ReactElement
}


export default function LayoutMain(props:IProps){

    // const d = useBreadcrump();
    // useEffect(()=>{
    //     console.log(d);
    // },[]);

    return (
        <div className="flex-start align-start">
            <Aside></Aside>

            <div className="layout-main flex-1">
                <Header></Header>

                <div className="flex-1"
                    style={{padding:16}}>
                    {props.children}
                </div>
            </div>
        </div>
    );

}