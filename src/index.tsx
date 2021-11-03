/*
 * @Description:
 * @Autor: 小明～
 * @Date: 2021-09-02 17:31:40
 * @LastEditors: 小明～
 * @LastEditTime: 2021-11-03 15:48:26
 */
import React,{Suspense,lazy} from 'react';
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
import {Spin,ConfigProvider} from 'antd';
import './style/antdreset.less';
import './style/reset.less';
// import './style/theme/index.less';
import './style/common.less';
import './style/minix/fontsize.less';
const AppPage = lazy(()=>import('./App'));
const LoginPage = lazy(()=>import('./pages/Login'));

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null}
            persistor={persistor}
        >
            <Suspense fallback={
                <Spin
                    size="large"
                />
            }>
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
            </Suspense>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// reportWebVitals();
