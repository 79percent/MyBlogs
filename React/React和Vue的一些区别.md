# React 和 Vue 之间的共同点

- react 和 vue 之间的设计理念是相同的，都是用数据驱动视图。
- 响应式更新视图。
- 从上到下的数据流。
- 都有虚拟 DOM，虚拟 DOM 实际是 JS 对象。

# 不同点

## 组件的写法

编写一个 React 组件,使用 JSX 语法<br>
**HelloWorld.JSX**

```javascript
class HelloWorld extends React.Component{
  state = {
    title: ''
  }

  // input输入时
  handleChange = e => {
	  const {value} = e.target
    this.setState({
      title: value
    })
  }

  render(){
    const {title} = this.state
    return (
      <>
        <input value={title} onChange={this.handleChange} >
        <h1 style={{color: '#333'}}>{title}</h1>
      </>
    )
  }
}
```

编写一个 Vue 组件，使用模板语法<br>
**HelloWorld.vue**

```html
<template>
  <div>
    <input v-model="title" />
    <h1>{{trimValue}}</h1>
  </div>
</template>
```

```javascript
<script>
export default {
  name: 'helloworld',
  data: function(){
    return {
      title: ''
    }
  },
  computed: {
    trimValue: function() {
			return this.title.trim();
		}
  }
}
</script>
```

```css
<style scoped>
  h1{
    color: '#333';
  }
</style>
```

## 数据的存储

### React
- React 的数据保存在 state 里，并且只能通过 this.setState 的方式更新 state，如果直接用 this.state.value = xxx，会导致组件不会更新，但是 state 中的数据已经改变。  
- setState 方法在 react 中是异步的。并且newState和oldState不是同一个引用地址。<br>
- class 中的 this.setState，更新 state 变量总是替换它而不是合并它。  
- 函数组件可以使用 hook 来操作 state 数据，它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。

### Vue
- Vue 的数据保存在 data 中，可以用 v-bind 绑定到视图上，也可以用 v-model 双向数据绑定，但是 v-model 主要是用于表单元素：input、textarea 以及 select。
- 当视图发生变化时，data 中的数据也会改变；当 data 中的数据发生变化时，视图也会改变。
- 也可以直接 this.title = xxx 直接修改 data 中的数据。newData和oldData是同一个引用地址。<br>

## 运行时的渲染性能

react 在不进行任何优化的情况下，父组件的重新渲染，会导致子组件树的重新渲染，如果要控制组件是否重新渲染，可以在 shouldComponentUpdate 生命周期中对其进行优化，通过返回 true 或者 false 来决定是否重新渲染。如要避免不必要的子组件的重渲染，你需要在所有可能的地方使用 PureComponent，或是手动实现 shouldComponentUpdate 方法。

Vue 中，组件的依赖是在渲染过程中自动追踪的，所以系统能精确知晓哪个组件确实需要被重渲染。你可以理解为每一个组件都已经自动获得了 shouldComponentUpdate，并且没有上述的子树问题限制。

## 状态管理

react 一般会用到 redux 和 mobx 等状态管理。
核心概念主要分为 3 个部分：action -> store -> reducer。

- action 就是视图层发起的一个行为，将这个行为的类型和数据分发给 store。

```javascript
dispatch({
  type: "deleteUser",
  payload: {
    id: 111,
  },
});
```

- store 是用来数据存储的地方。

```javascript
state = {
  userList: [],
};
```

- reducer 里可以更新 store，接收到 action 类型和数据之后，可以对 store 中的数据进行处理，并返回最新的 state。（reducer 这里更新 state 属于同步操作，如果有异步操作则需要用到中间件 redux-thunk、redux-saga 等等）

```javascript
const reducer = (state = initState, action) => {
  const { type, payload } = action;
  const { userList } = state;
  switch (type) {
    case "deleteUser":
      return {
        ...state,
        userList: userList.filter((item) => item.id !== payload.id),
      };
  }
};
```

vue 用官方维护的 vuex 状态管理库。在写法上比 redux 更加简洁，一个简单的 store 模式就可以实现。<br>
核心概念：<br>

- state：存储数据的地方
- mutaition：同步更新 state
- action：提交 mutaition，可以在 action 里进行异步操作
- getter：类似 vue 组件的计算属性，可以对 state 中的数据进一步处理
- module：每个页面/组件都可以分成一个模块，每个模块管理自己的那部分 state。<br>

代码实现：

```javascript
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.store({
  modules: {
    a: moduleA,
    b: moduleB
  },
  state: {
    count: 0,
  },
  getters: {
    countNum: state => {
      return `${state.count}个`
    }
  },
  mutation: {
    addCount(state) {
      state.count++;
    },
  },
  action: {
    addCountAsync(context) {
      setTimeOut(() => {
        context.commit("addCount");
      }, 1000);
    },
  },
});
```

两者都是类 Flux 状态管理的实现，在原理上都差不多。
