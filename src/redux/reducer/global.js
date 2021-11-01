/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-23 10:58:57
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-01 14:31:21
 */
// import moduleName from '../action/index';
import {SET_USER,SET_TOKEN,SET_MARCH_ROUTE,DELETE_TOKEN,MENU_HIDDEN,MENU_SHOW} from '../action-type';

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



export function matchRoute(state=[],action){
    const { type,payload} = action;
    switch (type) {
    case SET_MARCH_ROUTE:
        return [...payload];
    default:
        return state;
    }
}


export function hiddenMenu(state=false,action){
    const { type,payload} = action;
    switch (type) {
    case MENU_HIDDEN:
        return false;
    case MENU_SHOW:
        return true;
    default:
        return state;
    }
}