/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-10-21 16:38:59
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-01 15:31:51
 */
import React,{useState} from 'react';
import {Layout,Switch,Drawer} from 'antd';
import {SettingOutlined,MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';
import {useSelector,useDispatch} from 'react-redux';
import { IStore } from '@/typings/redux';
import { MENU_HIDDEN,MENU_SHOW } from '@/redux/action-type';
import { SketchPicker } from 'react-color';


import './header.less';
const { Header} = Layout;

// let a:IStore

export default function LayoutHeader(){
    const hiddenMenu = useSelector((state:IStore) => state.hiddenMenu);
    const dispatch = useDispatch();
    const [isShow, setIsShow] = useState(false);

    function toggleHiddenMenu(){
        if(hiddenMenu){
            dispatch({type:MENU_HIDDEN});
        }else{
            dispatch({type:MENU_SHOW});
        }
    }

    return (
        <Header className="layout-header flex-between">
            <div>
                <div className="logo" />
                <p className="toggle-icon"
                    onClick={toggleHiddenMenu}
                    style={{ marginBottom: 16 }}
                >
                    {React.createElement(hiddenMenu ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </p>
                {/* <Menu defaultSelectedKeys={['2']}
                    mode="horizontal"
                    theme="dark">
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu> */}
            </div>
            <div className="tools">
                <SettingOutlined className="icon-setting"
                    onClick={()=>setIsShow(true)} />
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