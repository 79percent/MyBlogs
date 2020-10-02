### 在介绍什么是`Hook`之前，先说一下在`Hook`出来之前，我们是怎么写`React`的。
***`class`类组件***   

使用类组件时，我们在`state`里定义状态变量，调用`this.setState()`方法修改`state`。
```javascript
class Example extends React.Component{
  state = {
    count: 0
  }

  handleClick = () => {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
  }

  render(){
    const { count } = this.state
    return (
      <>
        <h1>{count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </>
    )
  }
}
```
***function函数组件***  

函数组件没有生命周期，也没有`state`，只接受一个参数`props`，所有数据来源都来自`props`。  
因此函数组件适合用来写一些简单功能的组件，逻辑比较复杂的组件还是用`class`类组件来写比较合适。
```javascript
function Example(props){
  const { title } = this.props
  return (
    <h1>{title}</h1>
  )
}
```
```javascript
<Example title="哈哈哈" /> 
```
### `React v16.8`之后，新增了`Hook`
Hook的出现，让函数组件也可以定义自己的state, 以及类似于生命周期等React特性。  

***简单的`Hook`实现:***  

`useState` 就是一个 `Hook`, 它接受一个参数作为`state`初始值，然后会返回一个有两个值的数组，当前 state 以及更新 state 的函数，可以`使用es6解构语法对数组进行结构，并定义state变量名和方法名`。 

`useEffect` “副作用” `Hook`，它跟 `class` 组件中的 `componentDidMount、componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，会在完成对 DOM 的更改后运行“副作用”函数。默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。  
```javascript
import React, { useState } from 'react'

function Example(props){
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0)
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>
        +1
      </button>
    </>
  )
}
```
# useEffect

## useEffect 做了什么？ 
通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。在这个 effect 中，我们设置了 document 的 title 属性，不过我们也可以执行数据获取或调用其他命令式的 API。

## 为什么在组件内部调用 useEffect？ 
 
将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。

## useEffect 会在每次渲染后都执行吗？ 
是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。（我们稍后会谈到如何控制它。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。

```
我们可以在 effect 中获取到最新的 count 值，因为他在函数的作用域内。当 React 渲染组件时，会保存已使用的 effect，并在更新完 DOM 后执行它。这个过程在每次渲染时都会发生，包括首次渲染。

传递给 useEffect 的函数在每次渲染中都会有所不同，这是刻意为之的。事实上这正是我们可以在 effect 中获取最新的 count 的值，而不用担心其过期的原因。每次我们重新渲染，都会生成新的 effect，替换掉之前的。某种意义上讲，effect 更像是渲染结果的一部分 —— 每个 effect “属于”一次特定的渲染。
```

# 清除effect副作用
之前，我们研究了如何使用不需要清除的副作用，还有一些副作用是需要清除的。例如订阅外部数据源。这种情况下，清除工作是非常重要的，可以防止引起内存泄露！

## 使用 Class 的示例
在 React class 中，你通常会在 componentDidMount 中设置订阅，并在 componentWillUnmount 中清除它。例如，假设我们有一个 ChatAPI 模块，它允许我们订阅好友的在线状态。以下是我们如何使用 class 订阅和显示该状态：
```javascript
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}
```
componentDidMount 和 componentWillUnmount 之间相互对应。使用生命周期函数迫使我们拆分这些逻辑代码，即使这两部分代码都作用于相同的副作用。  

## 使用 Hook 的示例
你可能认为需要单独的 effect 来执行清除操作。但由于添加和删除订阅的代码的紧密性，所以 useEffect 的设计是在同一个地方执行。如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它：
```javascript
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // 通过useEffect返回一个函数，并在组件卸载的时候来调用这个方法清除effct副作用
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```
### 为什么要在 effect 中返回一个函数？ 
这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。

### React 何时清除 effect？ 
React 会在组件卸载的时候执行清除操作。正如之前学到的，effect 在每次渲染的时候都会执行。这就是为什么 React 会在执行当前 effect 之前对上一个 effect 进行清除。我们稍后将讨论为什么这将助于避免 bug以及如何在遇到性能问题时跳过此行为。

### 每次更新的时候都要运行 Effect
effect它会在调用一个新的 effect 之前对前一个 effect 进行清理。并不需要特定的代码来处理更新逻辑（class类组件中需要在componentDidUpdate中处理前后props的更新逻辑），因为 useEffect 默认就会处理。
```javascript
// Mount with { friend: { id: 100 } } props
ChatAPI.subscribeToFriendStatus(100, handleStatusChange);     // 运行第一个 effect

// Update with { friend: { id: 200 } } props
ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // 清除上一个 effect
ChatAPI.subscribeToFriendStatus(200, handleStatusChange);     // 运行下一个 effect

// Update with { friend: { id: 300 } } props
ChatAPI.unsubscribeFromFriendStatus(200, handleStatusChange); // 清除上一个 effect
ChatAPI.subscribeToFriendStatus(300, handleStatusChange);     // 运行下一个 effect

// Unmount
ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // 清除最后一个 effect
```
此默认行为保证了一致性，避免了在 class 组件中因为没有处理更新逻辑而导致常见的 bug。

## 通过跳过 Effect 进行性能优化
类组件中使用componentDidUpdate 中添加对 prevProps 或 prevState 的比较逻辑解决循环渲染的性能问题。
```javascript
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `You clicked ${this.state.count} times`;
  }
}
```
这是很常见的需求，所以它被内置到了 useEffect 的 Hook API 中。如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可：
```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
```
它会对比前一次渲染的[count]和后一次渲染的[count]，如果数组中的所有元素都是相等,React会跳过这次effect,这就是实现了性能优化。  

如果数组中有多个元素，即使只有一个元素发生变化，React 也会执行 effect。
```javascript
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // 仅在 props.friend.id 发生变化时，重新订阅
```  
## 使用effect第二个参数性能优化的注意点
- 确保数组中包含了所有外部作用域中会随时间变化并且在 effect 中使用的变量,否则会引用到先前渲染中的旧变量。  

- 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式。

- 如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直拥有其初始值。尽管传入 [] 作为第二个参数更接近大家更熟悉的 componentDidMount 和 componentWillUnmount 思维模式，但我们有更好的方式来避免过于频繁的重复调用 effect。除此之外，请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，因此会使得额外操作很方便。  

- 在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。

- 为防止内存泄漏，清除函数会在组件卸载前执行。

## effect 的执行时机
与 componentDidMount、componentDidUpdate 不同的是，在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因此不应在函数中执行阻塞浏览器更新屏幕的操作。