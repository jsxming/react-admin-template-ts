/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-20 15:41:38
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-20 15:44:10
 */

import { useState } from 'react';

let token = '';

function useToken(t:string = token){
    const [val,setVal] = useState(t);
    function setToken(v:string){
        setVal(v);
        token = v;
    }
    return [val,setToken];
}