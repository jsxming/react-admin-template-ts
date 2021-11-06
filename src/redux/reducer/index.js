/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-27 14:32:28
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-06 09:37:23
 */
import { combineReducers, } from 'redux';
import {
    user,
    matchRoute,
    token,
    hiddenMenu,
    auth,
    authPath,
    pageComponentAuth,
    currentPageComponentAuth
} from './global';

const CombineReducers = combineReducers({
    user,
    matchRoute,
    token,
    hiddenMenu,
    auth,
    authPath,
    pageComponentAuth,
    currentPageComponentAuth
});

export default CombineReducers;
