/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-22 10:59:42
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-22 10:59:43
 */

/**
 * 判断是否是一个有内容的数组
 * @param {any} val
 */
export function isArray(val:any){
    return Array.isArray(val) && val.length > 0;
}


/**
 * 判断一个值是否是一个有效的值
 * @param {any} val
 */
export function isValidValue(val:any){
    const r = val!==null && typeof val !=='undefined';
    return r;
}