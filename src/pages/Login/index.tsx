/*
 * @Description:登录页面
 * @Autor: 小明～
 * @Date: 2021-10-20 11:21:52
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-04 16:58:53
 */
import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {Form,Input,Button} from 'antd';
import API from '@/api/index';
import { useDispatch } from 'react-redux';
import {SET_TOKEN,SET_AUTH,SET_AUTH_PATH} from '@/redux/action-type';
import  './index.less';
import { IAuthItem } from '@/typings/redux';

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
            dispatch({type:SET_TOKEN,payload:res.token});
            dispatch({type:SET_AUTH,payload:auth});
            dispatch({type:SET_AUTH_PATH,payload:auth.map((item:IAuthItem)=>item.path)});

            h.push('/rbac/user');
        }).catch(() => {

        });
    }

    function changeTheme(){
        window.less.modifyVars({
            '@primary-color': '#fe715c'

        }).then((result:any) => {
            console.log(result);
        }).catch(() => {

        });
        // .catch((err:any)=>{
        //     console.log(err);
        // });
    }

    return (
        <div className="flex-center h-100 w-100">
            <Form initialValues={{tel:'19381609624',password:'123456'}}
                onFinish={login}
                style={{width:400}}>
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
            <h1>adfasdfasdf</h1>
            <Button onClick={changeTheme}
                type="primary" >修改</Button>
        </div>
    );
}