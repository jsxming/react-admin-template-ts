/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-10-20 11:41:46
 */
import React,{Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import './style/antdreset.less';
import './style/common.less';
import './style/minix/fontsize.less';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import zhCN from 'antd/es/locale/zh_CN';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Spin,ConfigProvider} from 'antd';
// import { ConfigProviderProps } from 'antd/es/config-provider';


ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={
            <Spin
                size="large"
            />
        }>
            <ConfigProvider locale={zhCN}>
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                        >
                            <App />
                        </Route>
                        <Route
                            component={lazy(()=>import('./pages/Test'))}
                            path="/test"
                        >
                        </Route>
                        <Route
                            component={lazy(()=>import('./pages/Login'))}
                            path="/login"
                        >
                        </Route>
                    </Switch>
                </Router>
            </ConfigProvider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
