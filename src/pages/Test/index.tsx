/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-20 14:07:11
 */
import React, {   useEffect, useRef, useState } from 'react';
import { useHistory,Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';

import {Button} from 'antd';
// import { JSXElement } from '@babel/types';
// import '@/ts_study/类型'
// import '@/ts_study/interface'



export default function Test() {
    const h = useHistory();
    const el = useRef(null);
    const [val, setVal] = useState('1');
    useEffect(() => {
        console.log(h);
    }, []);

    const log = (e: React.SyntheticEvent) => {
        console.log(e.target, e);
    };
    const change = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        const v = e.currentTarget.value;
        // let el = e.target as HTMLInputElement
        // console.log(el.value);
        // console.log(e.target.value);
        setVal(v);
    };

    useEffect(() => {
        console.log(el.current);
    }, []);

    return (
        <div>
            <h1 onClick={log}
                ref={el}>back------------------------</h1>
            {/* <input onChange={change}
                type="text"
                value={val} /> */}
            <Button type="primary">fadsfasdf</Button>
            <Link to="/login" >login</Link>
        </div>
    );
}

