### Vuepress-基础详解

#### 目录功能

```
|-- project
    |-- LICENSE
    |-- deploy.sh   //自动部署
    |-- package-lock.json
    |-- package.json
    |-- docs
    |   |-- README.md                               //  文档首页配置
    |   |-- .vuepress                               //  存放全局的配置、组件、静态资源等。
    |   |   |-- config.js                           //  文档配置文件
    |   |   |-- enhanceApp.js                       //  引用第三方插件
    |   |   |-- components                          //  该目录中的 Vue 组件将会被自动注册为全局组件
    |   |   |   |-- common                          //  公共组件
    |   |   |   |   |-- button.vue                  //  自定义按钮
    |   |   |-- dist                                //  存放打包后的文件
    |   |   |   
    |   |   |-- public                              //  静态资源目录,存放图片,Logo文件
    |   |   |   |-- favicon.jpeg
    |   |   |   |-- name.png
    |   |   |-- styles                              //  存放样式相关的文件
    |   |       |-- index.styl                      //  设定全局样式文件,优先级高于默认样式
    |   |       |-- palette.styl                    //  重写颜色常量
    |   |-- components                              //  存放组件文档要用到的markdown
    |   |   |-- README.md
    |   |   |-- 1.0                                 //  1.0 版本的文档 如果不需要版本管理，直接删除1.0这层文件夹即可
    |   |   |   |-- README.md
    |   |   |   |-- catButton.md
    |   |   |-- 2.0                                  //  2.0 版本的文档
    |   |       |-- README.md
    |   |       |-- catButton.md
    |   |-- guide                                    //  使用说明的文件夹
    |       |-- start.md
```

