function Person({ name, age }) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function () {
  console.log(this.name);
}

const gcf = new Person({ name: 'gcf', age: 11 })
const li = new Person({ name: 'li', age: 22 })

// 导出模块方式1
// module.exports = {
//   gcf,
//   li,
// }


// console.log(module.exports === exports)// true
// 导出模块方式2
exports.gcf = gcf
exports.li = li
