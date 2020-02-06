# react多端统一框架Taro开发外卖系统
## Taro框架基础知识
### 简介
Taro 是一套遵循 React 语法规范的 多端开发 解决方案。

现今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动/QQ小程序、快应用、H5、React-Native 等）运行的代码。
### 环境搭建
1. 安装 Taro 脚手架工具
npm install -g @tarojs/cli
2. 初始化项目
taro init taro-orderFood
![](https://tva1.sinaimg.cn/large/006tNbRwgy1gbmykg2yg9j30xg0i611k.jpg)
3. 安装 Taro UI
cd taro-orderFood
npm install taro-ui
4. 配置需要额外编译的源码模块
由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：
h5: {
  esnextModules: ['taro-ui']
}
5. 编译dev环境代码
WEB： num run dev:h5
微信小程序：num run dev:weapp
支付宝小程序：num run dev:swan
百度小程序：num run dev:alipay
等等

## 外卖系统开发
### 视觉设计稿

<figure class="half">
    <img width="200" src="https://tva1.sinaimg.cn/large/006tNbRwgy1gbmyt3e8fhj30km146jvc.jpg">
    <img width="200" src="https://tva1.sinaimg.cn/large/006tNbRwgy1gbmyu10paaj30km146gpl.jpg">
</figure>

## 课程总结