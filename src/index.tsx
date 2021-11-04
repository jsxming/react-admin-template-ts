/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-04 10:21:00
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import store, { persistor, } from '@/redux/store';
import { PersistGate, } from 'redux-persist/lib/integration/react';
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd';
import  AppPage from './App';
import  LoginPage from './pages/Login';

import './style/antdreset.less';
import './style/reset.less';
import './style/common.less';
import './style/minix/fontsize.less';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null}
            persistor={persistor}
        >
            <ConfigProvider locale={zhCN}>
                <Router>
                    <Switch>
                        <Route
                            component={LoginPage}
                            exact
                            path="/login"
                        >
                        </Route>
                        <Route
                            component={AppPage}

                            path="/"
                        >
                        </Route>
                    </Switch>
                </Router>
            </ConfigProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// reportWebVitals();
