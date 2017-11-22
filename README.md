# product-simple

> 所使用的架构
> vue2.0 + vue-router2.0 + vuex2 + axios

* 全新的项目，全新的体验
* 使用多入口VUE，按照**页面组**来划分vue入口
* 遇到ESLint捣乱，别忘了查看.eslintrc.js

## 前端构建方式

``` bash
# 安装node依赖
npm i

# 如果遇到npm不可用则使用cnpm
cnpm i

# 开启伴有热重载(HMR)的本地服务，URL: localhost:8080
npm run start

# 为正式环境构建压缩混淆的代码
npm run build

# 为正式环境构建压缩混淆的代码，并生成打包分析报告
npm run build --report
```

## 项目架构

| 框架 | 版本 | 说明 |
| ---- | ---- | ---- |
| vue.js | v2.5 | 构建用户界面的渐进式框架 |
| vue-router.js | v3.0 | 前端路由工具 |
| vuex.js | v3.0 | 全局状态管理工具 |
| axios.js | v0.17 | 基于Promise的HTTP客户端集成工具 |

## version 2.0
	
	2.0版本重点对 request 进行二次异步封装

	使request更加的灵活 添加了 request拦截 和 response拦截 以及预留日志收集

	对store进行组件化封装

	使数据结构更清晰 拓展性更强

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
