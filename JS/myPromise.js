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