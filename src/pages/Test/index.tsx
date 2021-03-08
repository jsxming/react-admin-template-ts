import React,{useEffect} from 'react';
import {  useHistory } from 'react-router-dom';


export default function Test(){
    const h = useHistory();

    useEffect(()=>{
        console.log(h);
    },[]);

    return (
        <div>
            <h1 onClick={()=>history.go(-1)}>back------------------------</h1>
        </div>
    );
}