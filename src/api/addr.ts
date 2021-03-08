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
    // adf: new PathConf('GET', '/'),
    // adf2: new PathConf('GET', '/', true),
};

export default allApi;