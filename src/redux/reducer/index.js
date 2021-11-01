/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-27 14:32:28
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-01 15:07:55
 */
import { combineReducers, } from 'redux';
import {user,matchRoute,token,hiddenMenu} from './global';

const CombineReducers = combineReducers({
    user,
    matchRoute,
    token,
    hiddenMenu
});

export default CombineReducers;
