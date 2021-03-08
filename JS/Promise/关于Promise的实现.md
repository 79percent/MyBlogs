# 关于Promise的实现
### 参考资料  
别人实现的Promise库  
[es6-promise](https://github.com/stefanpenner/es6-promise)  
[Promise/A+](https://github.com/then/promise)
## Promise介绍以及它的特点
- Promise构造函数接收参数  

    Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
    resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
    在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
    reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），
    在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

- Promise对象有以下几个特点。
1. 对象的状态不受外界影响。Promise对象代表一个异步操作，
    有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
    只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
    Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。
    只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。
    如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。
    这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

3. then中属于异步操作，且是微任务

## Promise中如何实现微任务？
- 浏览器中使用: `Window.MutationObserver` || `Window.WebkitMutationObserver` 对象  

- Node.JS中使用: `process.nextTick`  

- Window 暴露了 `queueMicrotask()` 方法(浏览器兼容性差，很多浏览器没有实现)  

## Node环境中测试`process.nextTick`
```javascript
setTimeout(() => {
  console.log(0)
}, 0)
process.nextTick(() => {
  console.log(1)
})
console.log(2);
```
从输出结果来看`process.nextTick`确实可以实现微任务
> 2  
1  
0  


## 尝试自己实现一个Promise构造函数
```javascript
/**
 * 手写一个Promise构造函数
 */
const PENDING = 'pending'; //初始状态
const FULFILLED = 'fulfilled'; // 成功状态
const REJECTED = 'rejected'; // 成功
const BrowserMutationObserver = window && (window.MutationObserver || window.WebKitMutationObserver);

// 使用MutationObserver创建微任务
function observer(fn){
  let count = 0;
  // MutationObserver可以绑定某个节点，当节点改变时，回调函数callback将放入微任务中
  const observe = new BrowserMutationObserver(() => {
    fn()
  });
  const textNode = document.createTextNode(String(count));
  observe.observe(textNode, {
    // 当文本改变时触发回调
    characterData: true
  });
  // 改变文本，使回调callback触发
  textNode.data = String(++count);
}

// MyPromise构造函数
function MyPromise(executor) {
  this.status = PENDING;// 状态
  this.resolveValue = undefined;// then方法中resolve()接收的参数值
  this.rejectValue = undefined;// then方法中reject()接收的参数值
  this.catchValue = undefined;// then方法中catch()接收的参数值
  this.fulfilledCallbacks = [];// 成功状态的异步回调
  this.rejectedCallbacks = [];// 失败状态的异步回调
  const resolve = (value) => {// resolve方法
    if (this.status === PENDING) {
      this.resolveValue = value;
      this.status = FULFILLED;
      this.fulfilledCallbacks.forEach(fn => fn());
    }
  };
  const reject = (value) => {// reject方法
    if (this.status === PENDING) {
      this.rejectValue = value;
      this.status = REJECTED;
      this.rejectedCallbacks.forEach(fn => fn());
    }
  };
  try {
    // 执行executor方法
    typeof executor === 'function' ?
      executor(resolve, reject) :
      console.error('The Params of MyPromise must be function');
  } catch (e) {
    this.catchValue = e;
    reject(e)
  }
};

MyPromise.prototype.then = function (res, rej) {
  // 如果不是函数，其必须被忽略
  res = (typeof res === 'function') ? res : value => value;
  rej = (typeof rej === 'function') ? rej : e => { throw e };
  const promise = new MyPromise((resolve, reject) => {
    if (this.status === FULFILLED) {
      try {
        observer(() => {
          const r = res(this.resolveValue);
          resolve(r);
        });
      } catch (e) {
        reject(e)
      }
    }
    if (this.status === REJECTED) {
      try {
        observer(() => {
          const r = rej(this.rejectValue);
          reject(r);
        });
      } catch (e) {
        reject(e)
      }
    }
    if (this.status === PENDING) {
      this.fulfilledCallbacks.push(res);
      this.rejectedCallbacks.push(rej);
    }
  })
  // 返回MyPromise，使得可以链式调用.then
  return promise;
};

MyPromise.prototype.catch = function (err) {
  throw err;
};

module.exports = MyPromise;
```

## 一些关于Promise执行顺序的题目
1. 
```javascript
new Promise((resolve, reject) => {
  console.log("外部promise");
  resolve();
})
  .then(() => {
    console.log("外部第一个then");
    // 注意：这里在then里面返回了一个Promise
    return new Promise((resolve, reject) => {
      console.log("内部promise");
      resolve();
    })
    .then(() => {
    console.log("内部第一个then");
    })
    .then(() => {
    console.log("内部第二个then");
    });
  })
  .then(() => {
    console.log("外部第二个then");
  });
```
结果：
>   
外部promise  
外部第一个then  
内部promise  
内部第一个then  
内部第二个then  
外部第二个then  

2.  Promise.then的执行顺序是按注册时的顺序执行的，状态改变的时候会立即注册后面第一个then
```javascript
new Promise((resolve, reject) => {
  console.log("外部promise");
  resolve();
})
  .then(() => {
    console.log("外部第一个then");
    // 注意：这里的Promise没有return
    new Promise((resolve, reject) => {
      console.log("内部promise");
      resolve();
    })
    .then(() => {
    console.log("内部第一个then");
    })
    .then(() => {
    console.log("内部第二个then");
    });
  })
  .then(() => {
    console.log("外部第二个then");
  });
```
结果：
>   
外部promise  
外部第一个then  
内部promise  
内部第一个then  
外部第二个then  
内部第二个then  

3.  这里没有使用链式写法，因此内部的then是根据代码顺序同步注册的
```javascript
new Promise((resolve, reject) => {
  console.log("外部promise");
  resolve();
})
  .then(() => {
    console.log("外部第一个then");
    let p = new Promise((resolve, reject) => {
      console.log("内部promise");
      resolve();
    })
    p.then(() => {
        console.log("内部第一个then");
      })
    p.then(() => {
        console.log("内部第二个then");
      });
  })
  .then(() => {
    console.log("外部第二个then");
  });
```
结果：
>   
外部promise  
外部第一个then  
内部promise  
内部第一个then  
内部第二个then  
外部第二个then  

4.  这里没有使用链式写法，因此内部的then是根据代码顺序同步注册的
```javascript
    let p = new Promise((resolve, reject) => {
      console.log("外部promise");
      resolve();
    })
    p.then(() => {
        console.log("外部第一个then");
        new Promise((resolve, reject) => {
          console.log("内部promise");
          resolve();
        })
          .then(() => {
            console.log("内部第一个then");
          })
          .then(() => {
            console.log("内部第二个then");
          });
      })
    p.then(() => {
        console.log("外部第二个then");
      });
```
结果：
>   
外部promise  
外部第一个then  
内部promise  
外部第二个then  
内部第一个then  
内部第二个then  

5.  这里没有使用链式写法，因此内部的then是根据代码顺序同步注册的
```javascript
      new Promise((resolve, reject) => {
        console.log("外部promise");
        resolve();
      })
        .then(() => {
          console.log("外部第一个then");
          new Promise((resolve, reject) => {
            console.log("内部promise");
            resolve();
          })
            .then(() => {
              console.log("内部第一个then");
            })
            .then(() => {
              console.log("内部第二个then");
            });
          return new Promise((resolve, reject) => {
            console.log("内部promise2");
            resolve();
          })
            .then(() => {
              console.log("内部第一个then2");
            })
            .then(() => {
              console.log("内部第二个then2");
            });
        })
        .then(() => {
          console.log("外部第二个then");
        });
```
结果：
>   
外部promise  
外部第一个then  
内部promise  
内部promise2  
内部第一个then  
内部第一个then2  
内部第二个then  
内部第二个then2  
外部第二个then  