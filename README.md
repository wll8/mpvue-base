# mpvue-base
基于 [mpvue](https://github.com/Meituan-Dianping/mpvue) [官方模版](https://github.com/mpvue/mpvue-quickstart)搭建的项目快速开发环境.

``` sh
npm i && npm run dev # 安装依赖并启动项目
# 然后使用微信开发者工具以本目录导入项目
```

## 主要特性
- [x] [eslint](https://eslint.org/demo), 基于 [standard](https://github.com/standard/standard) 编码风格
- [x] [husky](https://github.com/typicode/husky), 提交前校验代码的编码风格
- [x] [mpvue-entry](https://github.com/F-loat/mpvue-entry), 移除冗余的 main.js 文件
- [x] [mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch), 支持使用类 vue-router 的 api
- [x] [vant-weapp](https://github.com/youzan/vant-weapp), 移动端 Vue 组件库 Vant 的小程序版本
- [x] [分包支持](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html)
- [x] [less](https://less.bootcss.com/) 预处理器, 以及 [sass-resources-loader](https://github.com/shakacode/sass-resources-loader) 配置全局 less 公用文件
- [x] [flyio](https://www.npmjs.com/package/flyio) 作为请求库, 并统一配置 api

