1. 建立组件的模板，先把架子搭起来，写写样式，考虑好组件的基本逻辑。(os：思考1小时，码码10分钟，程序猿的准则。)
2. 准备好组件的数据输入。即分析好逻辑，定好 props 里面的数据、类型。
3. 准备好组件的数据输出。即根据组件逻辑，做好要暴露出来的方法。
4. 封装完毕了，直接调用即可

vue封装组件的缺点：不适合最组件进行二次封装，在不确定外部会传入哪些props的时候，需要在props中定义出全部的props属性和默认值，比较烦琐，尤其对table这类接收props属性很多的组件。 
可以
```javascript
post: {
  id: 1,
  title: 'My Journey with Vue'
}
```
```html
<blog-post v-bind="post"></blog-post>
```
绑定一个对象的方式传给组件作为props，相当于
```html
<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>
```
也可以用jsx语法来进行二次封装，但是没有了模板语法代码上的简洁的优点