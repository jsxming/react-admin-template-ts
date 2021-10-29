/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-29 09:30:17
 */
import $http from './config';
import apiAddr, { PathConf } from './addr';
import { Obj } from '../typings/global';

interface IResponse {
    code?: number;
    data: any;
    msg?: string;
}
type QuestFunc = (data?: any, opt?: Obj) => Promise<any>

interface IApi {
    [name: string]: QuestFunc
}

const API: IApi = {

};

// 锁定请求
const REQUEST_LOCK: Obj = {};

//判断是否是路径参数的url
function isPathParams(url: string): boolean {
    return url.lastIndexOf('/') === url.length - 1;
}

function createFromData(params: Obj): FormData {
    const result = new FormData();
    for (const key in params) {
        result.append(key, params[key]);
    }
    return result;
}


/**
 * 生成请求函数
 * @param {String} url
 */
function generatorApiFunc(pathInstance: PathConf): QuestFunc {
    // const arr = url.split(' ');
    // let method = '';
    // const bool = isFormData(url);
    // if (arr.length > 1) {
    //     method = arr[0];
    //     url = arr[1];
    // }
    return (data = {}, opt?: Obj): Promise<any> => {
        if (REQUEST_LOCK[pathInstance.url]) {
            console.warn('请求正在响应中，请勿重复点击！');
            return new Promise(() => {
            });
        } else {

            return new Promise((resolve, reject) => {
                let newUrl = pathInstance.url;
                REQUEST_LOCK[pathInstance.url] = pathInstance.url;

                if (isPathParams(pathInstance.url)) {
                    // /user/1 处理路径参数的情况 直接把参数添加在请求路径后面
                    newUrl += data;
                    data = '';
                    // if (opt) {
                    //     //处理路径参数 传formdata的情况
                    //     data = opt;
                    // }

                }



                $http({
                    url: newUrl,
                    params: pathInstance.method === 'GET' ? data : null,
                    data: pathInstance.isFormData ? createFromData(data) : data,
                    method: pathInstance.method,
                    responseType: pathInstance.bolb, //bolb返回类型 返回不进入then方法中
                }).then((res: IResponse) => {
                    if (res.code === 200) {
                        resolve(res.data);
                    } else {
                        reject(res);
                    }
                }).catch((err) => {
                    console.warn(`请求错误----url:${pathInstance.url}`, pathInstance.method, data);
                    console.error(err);
                    reject(err);
                }).finally(() => {
                    delete REQUEST_LOCK[pathInstance.url];
                });
            });
        }
    };
}


for (const key in apiAddr) {
    API[key] = generatorApiFunc(apiAddr[key]);
}
export default API;