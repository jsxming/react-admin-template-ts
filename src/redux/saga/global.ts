/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-23 15:47:58
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-23 17:58:26
 */

import {all, takeEvery,call, put,CallEffect,PutEffect} from 'redux-saga/effects';
import {DO_LOGIN, SET_TOKEN,QUERY_COURSE,SET_COURSE} from '../action-type';
import API from '@/api/index';

interface IAction{
    type:string;
    payload:any;
}

// function* test():Generator<number|CallEffect>{
//     const a = yield 1;
//     const a = yield 1;
//     yield call(new Promise((resolve)=>{}));
// }

function* generatorFunction():Iterable<number> {
    const b =   yield 1123;
    yield 1;
}




function* login(action:IAction): Generator{
    const res = yield call(API.login,action.payload);
    yield put({type:SET_TOKEN,payload:res.token});
}


function* queryCourses(action){
    const res = yield call(API.querySubjectTree,action.payload);
    yield put({type:SET_COURSE,payload:res});
}



export default function* root(){
    yield all([
        takeEvery(DO_LOGIN,login),
        takeEvery(QUERY_COURSE,queryCourses),
    ]);
}