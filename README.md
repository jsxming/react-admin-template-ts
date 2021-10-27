# React ts  开发模板

## 项目简介
>该项目的初心是为了复盘自己学习的ts知识和golang的知识

### 安装依赖包
```
yarn install
```

### 运行项目
```
yarn start
```

### 打包项目
```
yarn build
```

### 检查src下的ts文件错误
```
yarn eslint
```


### 目录结构
```
src
├── api               接口请求相关
├── components        页面组件
├── config            项目配置相关
├── hooks             hooks
├── index.tsx         入口文件
├── pages             页面
├── redux             redux-saga相关
├── routes            路由配置
├── style             样式
├── ts_study          我的ts学习记录
├── typings           ts定义文件
└── util              工具包
```


### 主要依赖库
1. react react-dom  react-router-dom
2. antd
3. redux redux-saga redux-persist
4. moment
5. Axios


### 功能简介
1. 登录
2. Rbac权限管理（页面权限，组件权限）
    + 用户列表展示、修改
    + 用户权限分配
    + 角色创建
    + 角色权限修改
3. Axios请求封装
4. 公共Hooks封装
5. 公共组件封装
6. 题库功能

