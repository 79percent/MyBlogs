# 原型链继承

```javascript
function Father() {}
function Child() {}
Child.prototype = new Father();
Child.prototype.constructor = Child;
```

优点： 实例可以共享原型链上的方法
缺点： 由于可以共享原型，修改原型上的属性会体现在其他实例上

# 盗用构造函数继承

在子类构造函数中调用父类构造函数

```javascript
function Father(name) {
  this.name = name;
}
function Child() {
  Father.call(this, "a");
}
```

优点： 可以在子类构造函数中向父类构造函数传参，每个实例都有自己的属性
缺点： 无法访问父类构造函数原型上的属性和方法，因此父类的方法必须定义在构造函数内

# 组合继承

```javascript
function Father(name) {
  this.name = name;
}
function Child() {
  Father.call(this, "a");
}
Child.prototype = new Father();
```

# 原型式继承

不是严格意义上构造函数的继承方法，即使不自定义类型也可以通过原型实现对象之间的信息共享。

```javascript
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
```

ES5 的 Object.create()与 object()方法效果相同

# 寄生式继承

```javascript
function createAnother(original) {
  let clone = object(original);
  clone.sayHi = function () {
    console.log("hi");
  };
  return clone;
}
```

# 寄生式组合继承

不通过调用父类构造函数给子类原型赋值，而是取得父类原型的一个副本。

```javascript
function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function Father() {}
function Child() {
  Father.call(this);
}
inheritPrototype(Child, Father);
```

# 总结

所谓继承，就是子类能够访问父类上的属性和方法，所以要实现这样的效果是有很多种方法的，但是不外乎通过绑定 this 作用域、原型链的方式实现继承。
