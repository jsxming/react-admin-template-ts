import React,{useEffect} from 'react';
import {  useHistory } from 'react-router-dom';
import '@/ts_study/类型'
import '@/ts_study/interface'

export default function Test(){
    const h = useHistory();

    useEffect(()=>{
        console.log(h);
    },[]);

    return (
        <div>
            <h1 onClick={()=>h.go(-1)}>back------------------------</h1>
        </div>
    );
}