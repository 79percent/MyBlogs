v-model可以实现实例的data和视图的双向绑定的，vuex中修改state，只能通过mutation来进行修改。
v-model用于表单数据的双向绑定，其实它就是一个语法糖，这个背后就做了两个操作：
v-bind绑定一个value属性；
v-on指令给当前元素绑定input事件。
当使用v-model=“xxx”绑定了vuex中的state时，会抛出异常，提示xxx没有setter。
不能够直接进行双向绑定
解决方案：
- 使用计算属性设置get和set
```javascript
computed: {
  xxx: {
    get(){
      return this.$store.state.xxx
    },
    set(value){
      this.$store.commit('changeXXX', value)
    }
  }
}
```

- 在change事件的回调函数中调用mutation方法，和react中的onchange事件写法类似

又去翻了官方vuex的文档，在不开严格模式下，v-model一个深层的vuex state属性是不会报错的，可以正常修改，但在严格模式下，只能通过mutation的方式来修改vuex中的state，用其他方式修改会直接报错。

vuex严格模式的原理是使用了一个状态变量true/false，只用调用commit的时候该变量才会为true，否则为false，抛出异常