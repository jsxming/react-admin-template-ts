import React,{useEffect} from 'react';
import {Button} from 'antd';
import {NavLink} from 'react-router-dom';
import API from './api/index';
import useUpload from '@/hooks/useUpload';

function App() {
    const test = useUpload({
        maxSize:100,
        upload:()=>{},
    });
    useEffect(()=>{
        API.queryUsers().then((res) => {
            console.log(res);
        }).catch(() => {

        });
    },[]);
    return (
        <div className="App">
            <h1>hello ts</h1>
            <h2 onClick={()=>test.change()}>22222222 ts</h2>
            <Button type="primary">btn---</Button>
            <NavLink to="/test">go test</NavLink>
        </div>
    );
}

export default App;
