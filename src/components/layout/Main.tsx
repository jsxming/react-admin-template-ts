/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-21 16:35:13
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-01 14:42:59
 */

import React from 'react';
import Aside from './Aside';
import Header from './Header';
import  './main.less';

interface IProps {
    children:React.ReactElement
}

export default function LayoutMain(props:IProps){
    return (
        <>
            <Header></Header>
            <div className="flex-start align-start layout-main">
                <Aside></Aside>
                <div className="flex-1">
                    {props.children}
                </div>
            </div>
        </>
    );

}