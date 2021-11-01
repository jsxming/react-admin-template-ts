/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-23 15:47:58
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-01 14:28:49
 */

import {all, takeEvery,call, put} from 'redux-saga/effects';
import {DO_LOGIN, SET_TOKEN} from '../action-type';
import API from '@/api/index';


// function* test():Generator<number|CallEffect>{
//     const a = yield 1;
//     const a = yield 1;
//     yield call(new Promise((resolve)=>{}));
// }



function* login(action){
    const res = yield call(API.login,action.payload);
    yield put({type:SET_TOKEN,payload:res.token});
}



export default function* root(){
    yield all([
        takeEvery(DO_LOGIN,login),
    ]);
}