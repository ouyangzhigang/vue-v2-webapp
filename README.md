<h1>vue2-webapp</h1>

## clone
```
    git clone http://git.pingan.com/pas/insurance-webapp.git
```

## install

```
    npm install
```

## run

```
    npm run dev
```   

## open

```
    http:localhost:3000/
```

## build   

```
  npm run build
```

## cross-platform-env

```
  npm install cross-env --save
```    

## packge.json
```
  "scripts": {
    "dev": "cross-env NODE_ENV=development node build/dev-server.js",
    "test": "cross-env NODE_ENV=test node build/pack-build.js",
    "build": "cross-env NODE_ENV=production node build/pack-build.js",
    "pack-test": "bash bash/pack-test.sh",
    "pack-prod": "bash bash/pack-prod.sh",
    "lint": "eslint --ext .js,.vue src"
  },
```


## recommend
* 个人感受
```
   vue2.0 10月初发布正式版了，官方的插件，vuex,vue-router同样升级到2.0了，据说2.0性能比react高。

   重构过程比较顺利，没什么困难，最主要是生命周期名变更，还有vuex的小变动，可以使用vue-migration-helper帮助升级，有比较友好的提示。

   vue2.0如果性能如网上所说的那么快，我建议使用vue,我比较喜欢vue的语法。
```

* vue2.0参考资料

 官方文档http://vuejs.org/guide/ 中文翻译http://vuefe.cn/

 vue-router2文档 http://router.vuejs.org/zh-cn/index.html

 vuex2.0文档 http://vuex.vuejs.org/en/index.html

 vue-resourece https://github.com/vuejs/vue-resource

 滑动广告插件 https://github.com/surmon-china/vue-awesome-swiper


* github地址

 https://github.com/zhengguorong/maizuo/tree/master/vuexMaizuo2
