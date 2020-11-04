# vue-router-auth-demo

> Vue 路由权限示例

## 构建模拟项目

1. vue cli 构建 client

    ```
    vue create client
    ```

2. koa-generator 构建 server

    ```
    npm install koa-generator -g
    koa2 server -e
   // -e 表示使用 ejs 模板，默认 jade
    ``` 

## 路由权限流程

1. 用户 uid  -> 路由权限接口 -> 用户路由权限列表 JSON 数据

2. JSON 数据 -> 根据父子关系树形化数据 -> 树形数据

3. 树形数据 -> 静态路由及菜单组件
