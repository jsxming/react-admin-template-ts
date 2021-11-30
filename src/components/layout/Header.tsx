/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-21 16:38:59
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-29 15:32:58
 */
import React,{useState} from 'react';
import {Layout,Switch,Drawer,Avatar,Breadcrumb,Popconfirm} from 'antd';
import {SettingOutlined,MenuUnfoldOutlined,LogoutOutlined,MenuFoldOutlined,FullscreenOutlined,FullscreenExitOutlined,HomeOutlined} from '@ant-design/icons';
import {useSelector,useDispatch} from 'react-redux';
import { IStore } from '@/typings/redux';
import { MENU_HIDDEN,MENU_SHOW } from '@/redux/action-type';
import { SketchPicker } from 'react-color';
import {toggleScreen} from '@/util/index';


import {useLocation,useHistory} from 'react-router-dom';
import {Routes} from '@/routes/index';
import { RouteItem } from '@/typings/route';
// import {Breadcrumb} from 'antd';
// import {HomeOutlined} from '@ant-design/icons';

import './header.less';
const { Header} = Layout;

// let a:IStore

function useBreadcrump():RouteItem[]{
    const loc  = useLocation();
    const result:RouteItem[] = [];
    const findRouterMatch = (arr:RouteItem[],pathname:string,result:RouteItem[],len:number=1)=>{
        const names = pathname.split('/').slice(1);
        let pathItem ='';
        for (let index = 0; index < len; index++) {
            pathItem += '/'+names[index];
        }
        const r = arr.find(route=>route.path.includes(pathItem));
        if(typeof r!=='undefined'){
            result.push(r);
            if(typeof r.children !=='undefined' && names.length>=len ){
                findRouterMatch(r.children,loc.pathname,result,len+1);
            }
        }
    };
    findRouterMatch(Routes,loc.pathname,result);
    return result;
}


export default function LayoutHeader(){
    const hiddenMenu = useSelector((state:IStore) => state.hiddenMenu);
    const dispatch = useDispatch();
    const [isShow, setIsShow] = useState(false);
    const h = useHistory();
    const breadcrump = useBreadcrump();

    function toggleHiddenMenu(){
        if(hiddenMenu){
            dispatch({type:MENU_HIDDEN});
        }else{
            dispatch({type:MENU_SHOW});
        }
    }
    const [isScreen,setIsScreen] = useState(false);

    function changeScreen(bool:boolean){
        toggleScreen(bool);
        setIsScreen(bool);
    }

    const logout = ()=>{
        h.push('/login');
    };

    return (
        <Header className="layout-header flex-between">
            <div className="flex-start">
                <p className="toggle-icon"
                    onClick={toggleHiddenMenu}
                >
                    {React.createElement(hiddenMenu ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </p>
                <Breadcrumb  >
                    <Breadcrumb.Item className="bread-item"
                        href="#">
                        <HomeOutlined />
                    </Breadcrumb.Item>
                    {
                        breadcrump.map(item=>{
                            return <Breadcrumb.Item className="bread-item"
                                key={item.title}>{item.title}</Breadcrumb.Item>;
                        })
                    }
                </Breadcrumb>
            </div>
            <div className="tools flex-start">
                {
                    isScreen ?
                        <FullscreenExitOutlined className="icon-white"
                            onClick={()=>changeScreen(false)}
                        />
                        :
                        <FullscreenOutlined
                            className="icon-white"
                            onClick={()=>changeScreen(true)}
                        />

                }
                <SettingOutlined className="icon-white"
                    onClick={()=>setIsShow(true)} />
                <Avatar src="https://joeschmoe.io/api/v1/random"  />
                <Popconfirm
                    cancelText="取消"
                    okText="确认"
                    onConfirm={()=>logout()}
                    title="您确定要退出系统吗?"
                >
                    <LogoutOutlined className="icon-white ml-15"/>
                </Popconfirm>

            </div>

            <Drawer
                className="setting-drawer"
                onClose={()=>setIsShow(false)}
                placement="right"
                title="项目配置"
                visible={isShow}
                width={360}
            >
                <h4 className="tit">隐藏菜单</h4>
                <Switch defaultChecked={!hiddenMenu}
                    onChange={toggleHiddenMenu} />
                <h4 className="tit">主题色</h4>
                <SketchPicker
                    color={'#e7592e;'}
                    onChange={({ hex }:any) => {
                        window.less.modifyVars({
                            '@primary-color': hex
                        }).then((result:any) => {
                            console.log(result);
                        }).catch(() => {

                        });
                    }}
                />

            </Drawer>
        </Header>
    );
}