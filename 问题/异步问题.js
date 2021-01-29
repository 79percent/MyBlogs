// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2");
// }
// console.log("script start");
// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);
// async1();
// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
// console.log("script end");
/**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * promise2
 * async1 end
 * setTimeout
 */

// new Promise((resolve, reject) => {
//   console.log(1);
//   resolve();
// }).then(() => {
//   console.log(2);
// });
// (async () => {
//   console.log(3);
//   await new Promise((resolve) => {
//     console.log(4);
//     resolve();
//   }).then(() => {
//     console.log(5);
//   });
//   console.log(6);
// })();
// console.log(7);
// new Promise((resolve, reject) => {
//   console.log(8);
//   resolve();
// }).then(() => {
//   console.log(9);
// });


// (async () => {
//   console.log(1)
//   await console.log(2)
//   console.log(3)
//   await console.log(4)
//   console.log(5)
// })();
// new Promise(resolve => {
//   console.log(6)
//   resolve()
// })
//   .then(() => {
//     console.log(7)
//   });
//   (async () => {
//     console.log(8)
//     await console.log(9)
//     console.log(10)
//   })()


// setTimeout(() => {
//   console.log(1)
// }, 10)
// new Promise(resolve => {
//   console.log(3)
//   resolve()
// }).then(() => {
//   console.log(4)
// })
// setTimeout(() => {
//   console.log(2)
// })

// function* gen(){
//   console.log(1)
//   yield console.log(2)
//   console.log(3)
//   yield console.log(4)
//   console.log(5)
//   return 'a'
// }

// console.log(0)
// const g = gen();
// console.log(6)
// g.next();
// console.log(7)
// g.next();
// console.log(8)
// g.next();

// async function async1() {
//   console.log('1');
//   await async2();
//   console.log('2');
// }
// async function async2() {
//   console.log('3');
// }
// console.log('4');
// setTimeout(function() {
//   console.log('5');
// }, 0)
// async1();
// new Promise(function(resolve) {
//   console.log('6');
//   setTimeout(function() {
//     console.log('7');
//   }, 0)
//   resolve();
// }).then(function() {
//   console.log('8');
//   setTimeout(function() {
//     console.log('9');
//   }, 0)
// });
// console.log('10');
/**
 * 4
 * 1
 * 3
 * 6
 * 10
 * 2
 * 8
 * 5
 * 7
 * 9
 */

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
console.log('async2');
}

console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0)

async1();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');
/**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */

// chrome浏览器和node环境中 await下面的代码和.then的执行顺序有点不同
// node中then的优先级高于await下面的代码
// 浏览器中await下面的代码高于then
// 可能是不同环境对于Promise的底层实现不同