/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-23 10:58:57
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-25 17:50:05
 */
// import moduleName from '../action/index';
import {SET_USER,SET_TOKEN,SET_COURSE,SET_MARCH_ROUTE,DELETE_TOKEN} from '../action-type';
export function test(state = 1, action) {
    const { type,payload} = action;
    switch (type) {
    case 'addNumber':
        return state+=payload;
    case 'reduce':
        return state-1;
    default:
        return state;
    }
}

//登录用户信息
export function user(state={ },action) {
    const { type,payload} = action;
    switch (type) {
    case SET_USER:
        return {
            ...state,
            ...payload
        };
    default:
        return state;
    }
}

//token
export function token(state='..a',action) {
    const { type,payload} = action;
    switch (type) {
    case SET_TOKEN:
        return payload;
    case DELETE_TOKEN:
        return '';
    default:
        return state;
    }
}


//课程列表
export function courseList(state=[],action) {
    const { type,payload} = action;
    switch (type) {
    case SET_COURSE:
        return [...payload];
    default:
        return state;
    }
}

export function matchRoute(state=[],action){
    const { type,payload} = action;
    switch (type) {
    case SET_MARCH_ROUTE:
        return [...payload];
    default:
        return state;
    }
}