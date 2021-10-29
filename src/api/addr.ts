/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-29 14:47:08
 */
import { Method, ResponseType } from 'axios';

export class PathConf {
    method: Method;
    url: string;
    isFormData: boolean;//是否传formdata
    bolb: ResponseType; //是否文件下载 bolb类型
    constructor(m: Method, url: string, isFormData: boolean = false, bolb: ResponseType = 'json') {
        this.method = m;
        this.url = url;
        this.isFormData = isFormData;
        this.bolb = bolb;
    }
}

interface IPaths {
    [propName: string]: PathConf;
}


const allApi: IPaths = {
    queryUsers: new PathConf('GET', '/user/all'),
    login: new PathConf('POST', '/common/login'),
    queryUserRole: new PathConf('GET', '/user/role'),
    queryAuthAll: new PathConf('GET', '/auth/all'),
    queryRoleAll: new PathConf('GET', '/role/all'),
    queryRoleAuth: new PathConf('GET', '/role/auth/'),
    updateRoleAuth: new PathConf('POST', '/role/auth/update'),
    // adf: new PathConf('GET', '/'),
    // adf2: new PathConf('GET', '/', true),
};

export default allApi;