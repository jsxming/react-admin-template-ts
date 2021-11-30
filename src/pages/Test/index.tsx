/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-09 09:42:38
 */
import React, {   useEffect, useRef, useState,createContext,useContext,useMemo } from 'react';
import { useHistory,Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Auth from '@/components/common/Auth';

import {Button} from 'antd';
// import { JSXElement } from '@babel/types';
// import '@/ts_study/类型'
// import '@/ts_study/interface'


const TestContext = createContext(1);

function Child(){
    const test = useContext(TestContext);
    return <div>
        <h1>test=={test}</h1>
    </div>;
}

function Child2(){
    return useMemo(() => {
        return <h1>child22222</h1>;
    }, []);
}

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

    let [count, setCount] = useState(1);

    useEffect(() => {
        console.log(el.current);
    }, []);

    return (
        <div>
            <h1 onClick={log}
                ref={el}>back------------------------</h1>
            <Button onClick={()=>setCount(++count)}
                type="primary" >fadsfasdf</Button>
            <Link to="/login" >login</Link>
            <TestContext.Provider value={count}>
                <Child/>
                <Child2/>
            </TestContext.Provider>
            <Auth id={14}>
                <h1>111</h1>
            </Auth>
            <Auth id={15}>
                <h1>222</h1>
            </Auth>
        </div>
    );
}

