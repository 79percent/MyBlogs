## umi项目打包后打开index.html会出现空白的情况
> 解决办法：
在.umirc.ts文件加上
```
history: { type: 'hash' },// 解决二级路由的问题
publicPath: './', // index.html 中 src引入的路径不对
```