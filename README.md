# official-web-with-backend
为带后台的官网搭建个试验性的版本

## 项目目录

```
├── client-side (客户端代码)
├── docs （文档）
├── libs （项目共享代码）
└── server-side （服务端代码）
```

## 生产执行脚本

```bash
    # 安装依赖
    npm install

    # 服务端
        cd server-side
        npm run build
        # 开启服务
        npm start
        # 关闭服务
        npm stop
   

    # 客户端
        npm run build:ssr
        npm run serve:ssr
```

## 备注

- 想在开发编译中查看ie11效果，需要把`tsconfig.app.json`中的`target`字段改成`es5`

## 技术栈

### Client side

- [Angular 9.0](https://angular.cn/)
- [Angular Universal (SSR support)](https://angular.cn/guide/universal)
- [Ng-ZORRO](https://ng.ant.design/docs/introduce/zh)

### Server side
- [Midwayjs](https://midwayjs.org/midway/) -- **打算废弃，改用nest.js**


## Problems need to be solved

### Global

- [x] 服务端/客户端共用interface

> Angular 客户端直接通过paths配置引用  
> MidwayJS 需要以本地NPM链接的形式，拷贝到node_modules里引用（假如使用paths，会导致编译出来到目录结构不对，无法启动程序）

### Client side

- [ ] 动态路由，通过请求设备自动分配是电脑端还是移动端
- [x] 后端渲染时动态设置meta
- [ ] 后端渲染时图片的加载失败问题
- [x] http请求拦截鉴权
- [x] 部分页面走回CSR（admin）
- [ ] svg-icon的使用

### Server side

- [x] middleware全局和局部顺序

> 先全局，再局部
