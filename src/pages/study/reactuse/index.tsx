/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-11-29 15:15:21
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-29 15:25:22
 */
import React,{useState} from 'react';

import useSize from 'react-use/lib/useSize';

export default function Ru(){
    const [sized, {width, height}] = useSize(
        ({width}) => <div style={{border: '1px solid red'}}>Size me up! ({width}px)</div>
    );
    return (
        <div>
            {sized}
            <div>width: {width}</div>
            <div>height: {height}</div>
        </div>
    );
}