# Image图片无法显示的问题
今天在RN中使用Image的时候发现网络图片无法显示
```javascript
const imgUri = 'http://...';
// ...
<Image
  source={{ uri: imgUri }}
/>
```
网上查了下资料,原因是使用Image需要指定图片的宽高，否则无法显示.
加下宽高后，可以正常显示图片了
```javascript
const imgUri = 'http://...';
// ...
<Image
  source={{ uri: imgUri }}
  style={{ width: 100, height: 100 }}
/>
```

[附上链接](https://blog.csdn.net/reylen/article/details/74526395?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param)
