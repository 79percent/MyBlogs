# 工厂模式

```javascript
function createPerson(name) {
  return {
    name,
    sayName: function () {
      console.log(this.name);
    },
  };
}
const p1 = createPerson("a");
const p2 = createPerson("b");
```

缺点： 不知道创建的对象是什么类型

# 构造函数模式

```javascript
function Person(name) {
  this.name = name;
  this.sayName = function () {
    console.log(this.name);
  };
}
const p1 = new Person("a");
const p2 = new Person("b");
```

缺点： 每次创建新对象的时候，都会把定义的方法创建一遍

# 原型模式

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};
const p1 = new Person("a");
const p2 = new Person("b");
```

缺点： 由于构造函数原型上的属性和方法是被所有实例共享的，所以如果某个实例修改了原型上的属性，也会在其他实例上反应出来。
