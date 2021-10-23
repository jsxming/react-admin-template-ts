/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-23 15:47:50
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-23 15:47:51
 */


import { all, fork, } from 'redux-saga/effects';
import global from './global';
export default function* root() {
    yield all([
        fork(global),
    ]);
}
