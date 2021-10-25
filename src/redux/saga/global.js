/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-23 15:47:58
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-25 17:47:34
 */

import {all, takeEvery,call, put} from 'redux-saga/effects';
import {DO_LOGIN, SET_TOKEN,QUERY_COURSE,SET_COURSE} from '../action-type';
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