/**
 * Node内置模块 events
 * 事件注册和处理
 */
const events = require('events');

const e = new events();

/**
 * 注册事件
 */
e.on('play', (v) => {
  console.log(111, v)
})
e.on('play', (v) => {
  console.log(222, v)
})

e.on('oncenPlay', (v) => {
  console.log(333, v)
})
e.on('oncenPlay', (v) => {
  console.log(444, v)
})

/**
 * 触发事件
 */
e.emit('play', 'hello')
e.emit('oncenPlay', 'hello')