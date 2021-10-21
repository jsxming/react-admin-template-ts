/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-21 16:35:13
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-21 17:29:55
 */

import React from 'react';
import Aside from './Aside';
import Header from './Header';

interface IProps {
    children:React.ReactElement
}

export default function LayoutMain(props:IProps){
    return (
        <>
            <Header></Header>
            <div className="flex-start align-start">
                <Aside></Aside>
                <div className="flex-1">
                    {props.children}
                </div>
            </div>
        </>
    );

}