import React,{Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import './style/antdreset.less';
import './style/common.less';
import './style/index.css';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import zhCN from 'antd/es/locale/zh_CN';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Spin,ConfigProvider} from 'antd';


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
                    </Switch>
                </Router>
            </ConfigProvider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
