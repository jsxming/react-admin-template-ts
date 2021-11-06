/*
 * @Description:登录页面
 * @Autor: 小明～
 * @Date: 2021-10-20 11:21:52
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-06 10:33:17
 */
import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {Form,Input,Button} from 'antd';
import API from '@/api/index';
import { useDispatch } from 'react-redux';
import {SET_TOKEN,SET_AUTH,SET_AUTH_PATH,SET_PAGE_COMPONENT_AUTH} from '@/redux/action-type';
import { IAuthItem,IComponentAuthCache } from '@/typings/redux';
import  './index.less';

//登录参数
interface LoginParams {
    tel:string;
    password:string;
}


export default function Login(){
    const dispatch = useDispatch();
    const h = useHistory();
    useEffect(()=>{
        console.log(dispatch);
    },[]);
    function login(values:LoginParams){
        API.login(values).then((res) => {
            localStorage.token = res.token;
            const auth = res.auth || [];
            const componentAuth:IAuthItem[] = auth.filter((item:IAuthItem)=>item.isPage===0);
            const componentAuthcache:IComponentAuthCache = {};
            componentAuth.forEach(item=>{
                if(Array.isArray(componentAuthcache[item.parentId])){
                    componentAuthcache[item.parentId].push(item);
                }else{
                    componentAuthcache[item.parentId] = [item];
                }
            });
            // console.log(componentAuthcache);
            dispatch({type:SET_TOKEN,payload:res.token});
            dispatch({type:SET_AUTH,payload:auth});
            dispatch({type:SET_AUTH_PATH,payload:auth.map((item:IAuthItem)=>item.path)});
            dispatch({type:SET_PAGE_COMPONENT_AUTH,payload:componentAuthcache});

            h.push('/rbac/user');
        }).catch(() => {

        });
    }

    return (
        <div className="flex-center h-100 w-100">
            <Form initialValues={{tel:'19381609624',password:'123456'}}
                onFinish={login}
                style={{width:300}}>
                <Form.Item label="账号"
                    name="tel">
                    <Input/>
                </Form.Item>
                <Form.Item label="密码"
                    name="password">
                    <Input/>
                </Form.Item>
                <Form.Item >
                    <Button htmlType="submit"
                        type="primary" >登录</Button>
                </Form.Item>
            </Form>
        </div>
    );
}