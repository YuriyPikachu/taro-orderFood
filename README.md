# 如何react多端统一框架Taro开发外卖系统？
## Taro框架基础知识
### 简介
Taro 是一套遵循 React 语法规范的多端开发解决方案。

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

### 拆分设计稿
1、头部(components/head)
![](https://tva1.sinaimg.cn/large/006tNbRwgy1gbn1pj1hz2j30ku09k0u3.jpg)
* 导航栏(Top)，有两个文件。
top.jsx
![](https://tva1.sinaimg.cn/large/006tNbRwgy1gbn2a13lo3j312i0k4q44.jpg)
top.less
![](https://tva1.sinaimg.cn/large/006tNbRwgy1gbn2f3iozuj30fq0u474r.jpg)
* 店铺介绍(head)
head.jsx
![](https://tva1.sinaimg.cn/large/006tNbRwgy1gbn2o585zxj311t0u0gnb.jpg)
head.less
![](https://tva1.sinaimg.cn/large/006tNbRwgy1gbn2q6k1lej30hk156jse.jpg)
* 活动(activity)
activity.jsx
![](https://tva1.sinaimg.cn/large/006tNbRwgy1gbn2k2qgimj30u00wzmyr.jpg)
activity.less
![](https://tva1.sinaimg.cn/large/006tNbRwgy1gbn2mmrmcaj30fm0oi3z2.jpg)

2、中间部分(components/food)
* 菜品
food.jsx
![](https://tva1.sinaimg.cn/large/006tNbRwgy1gbn3hrg4idj31fk0iqgms.jpg)

    food.less
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn41ljv4bj30cu05aq2t.jpg)
* 分类
category.jsx
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3yxiwu8j31h00u0taq.jpg)

    category.less
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3zk6ppsj30by0lgglw.jpg)
* 菜品列表
foodlist.jsx
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3xqfa59j31j40u0q4l.jpg)

    foodlist.less
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3y37hprj30aw04wjr9.jpg)

3、底部部分(components/bottom)
* bottom.jsx
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3welphaj31uc0t8jtu.jpg)

    bottom.less
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3x0kyr8j30gu14c0tv.jpg)

4、加菜按钮(components/addfood)
* addfood.jsx
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3ueg54fj31470u0gnq.jpg)

    addfood.less
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3uvtgexj30fa0s6dga.jpg)

5、工具类(utils)
* common.jsx
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3swq02jj30l40eemxd.jpg)
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3taxuilj30u00zdq4t.jpg)
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3ttekw2j30ps0ncwfa.jpg)

    events.jsx
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3rubascj30n20t2mxx.jpg)

6、项目入口
* index.jsx
![](https://tva1.sinaimg.cn/large/0082zybpgy1gbn3r9stjuj30gq09u749.jpg)

## 总结
第一版就是实现一个外卖系统的的点菜功能，可以对菜进行点菜添加或者减少。以及相关样式的展示。

## 后续
1. 添加redux
2. 抽离UI当中的逻辑，更好的解耦
3. 添加网络框架
4. 添加上拉加载更多，下拉刷新等
5. 屏幕适配

## Demo地址
[https://github.com/YuriyPikachu/taro-orderFood](https://github.com/YuriyPikachu/taro-orderFood)
## 了解更移动开发知识，欢迎关注公众号：
![](https://tva1.sinaimg.cn/large/006tNbRwgy1gayiubsiuaj309k09kdfn.jpg)         
* 头条：[Android开发加油站](https://www.toutiao.com/c/user/1789857904/#mid=1581788092440589)
* 微博：[Android开发加油站](http://weibo.com/2648402234/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1)
* 公众号：[Android开发加油站]()
* QQ技术交流群：389274438
* 博客：[https://YuriyPikachu.github.io](https://YuriyPikachu.github.io)
* 简书：[YuriyPikachu](https://www.jianshu.com/u/1df4d713a12c)
* 知乎：[YuriyPikachu](https://www.zhihu.com/people/YuriyPikachu)
* csdn：[https://blog.csdn.net/pjingying](https://blog.csdn.net/pjingying)
* github：[https://github.com/YuriyPikachu](https://github.com/YuriyPikachu)
* 邮箱：[YuriyPikachu@163.com](YuriyPikachu@163.com)
