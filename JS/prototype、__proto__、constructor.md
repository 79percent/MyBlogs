# `prototype`

每个函数都会有一个 prototype 属性，它是一个对象，包含应该由特定引用类型的实例共享的属性和方法。实际上，这个对象就是通过调用构造函数创建的对象的原型。原型对象上的属性和方法可以被对象实例共享。

# `constructor`

默认情况下，每个函数的原型对象，即 prototype 都会获得一个 constructor 属性，它指向了当前的函数，Person.prototype.constructor = Person

# `__proto__`

在现代浏览器 Firefox、Safari 和 Chrome 上都实现了`__proto__`属性，`__proto__`是每个对象都有的属性，它用来指向对象的构造函数的原型，获取一个对象的属性或者方法时，如果对象上没有，会从`__proto__`上去找，这样就形成了原型链
函数也是对象，所以函数也有 `__proto__` 属性

# 构造函数、原型和实例的关系

每个构造函数都有一个原型对象 prototype，原型有一个属性 constructor 指回构造函数，而实例有一个内部指针`__proto__`指向构造函数的原型。

# 原型链

如果原型是另一个类型的实例呢？那就意味着这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函数。这样就在实例和原型之间构造了一条原型链。这就是原型链的基本构想。

```javascript
function Father() {
  this.name = "爸爸";
}
Father.prototype.sayName = function () {
  console.log(this.name);
};

function Child() {
  this.name = "孩子";
  this.age = 12;
}
Child.prototype = new Father(); // 继承Father
Child.prototype.sayAge = function () {
  console.log(this.age);
};

const f = new Father();
const c = new Child();
f.sayName();
c.sayName();
c.sayAge();
```

# 对象属性的搜索机制

在读取实例上的属性时，首先会在实例上搜索这个属性。如果没有找到，则会继承搜索实例的原型。在通过原型链实现继承之后，搜索就可以继承向上，搜索原型的原型，一直持续到原型链的末端。
