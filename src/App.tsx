/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-21 17:43:13
 */
import React,{useEffect} from 'react';
import {Button} from 'antd';
import {NavLink} from 'react-router-dom';
import useUpload from '@/hooks/useUpload';
import LayoutMain from '@/components/layout/Main';
import API from '@/api/index';
function App() {
    const test = useUpload({
        maxSize:100,
        upload:()=>{},
    });
    useEffect(()=>{
        API.queryAuthAll().then((res) => {
            console.log(res);
        }).catch((err) => {

        });
    },[]);
    return (
        <LayoutMain>
            <div>
                <h1>123</h1>
                <NavLink to="/login">go login</NavLink>
                <hr />
                <NavLink to="/test">go test</NavLink>
                <hr />

                <Button type="primary">btn---</Button>
            </div>
        </LayoutMain>
        // <div className="App">
        //     <h1>hello ts</h1>
        //     <h2 onClick={()=>test.change()}>input change</h2>
        //     <Button type="primary">btn---</Button>
        //     <NavLink to="/test">go test</NavLink>
        //     <NavLink to="/login">go login</NavLink>
        // </div>
    );
}

export default App;
