## 关于babel是如何编译es6中的class
突然想起阮老师在class章节中写道：class是语法糖，平时每天在用但是没有注意过class是如何被编译的。  
这里借助了[babel在线编译器](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAEAKCmAnCB7AdtA3gKAJDHQgBdEBXYIgCjTAFt4BKHaF6XIgCwEsIA6G-tAC80AfGytoAX2wzsoSDACyAT2jwAHkXhoAJjATJ0OfIRLkqYgDTQwAc0bNJ0Tj3514w0R4nPXfe08RQN8WGSkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=true&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Ces2015-loose%2Cenv&prettier=true&targets=&version=7.10.5&externalPlugins=)，可以看到es6编译之后的代码  
用进行babel编译的用处，主要是为了兼容低版本不支持es6语法。  
***es6代码***
```javascript
class Person {
  construct(name) {
    this.name = name
  }
}

class My extends Person {
  construct(name, age) {
    this.name = name
    this.age = age
  }
}
```
***babel编译之后的代码***
```javascript
"use strict";

/**
 * 继承的方法
 * 接受参数：子类, 被继承的父类
 * 解析：这里使用到了Object.create()方法来实现继承。
 * Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
 * 用 Object.create可以实现类式继承，这是一个所有版本JavaScript都支持的单继承。
 */
function _inheritsLoose(subClass, superClass) { 
  // 子类续承父类
  subClass.prototype = Object.create(superClass.prototype); 
  subClass.prototype.constructor = subClass; 
  subClass.__proto__ = superClass; 
}

// 父类Person
var Person = /*#__PURE__*/function () {
  function Person() { }

  var _proto = Person.prototype;

  _proto.construct = function construct(name) {
    this.name = name;
  };

  return Person;
}();

// 子类My
var My = /*#__PURE__*/function (_Person) {
  // 调用继承的方法
  _inheritsLoose(My, _Person);

  function My() {
    // 将子类的this绑定到父类上
    return _Person.apply(this, arguments) || this;
  }

  var _proto2 = My.prototype;

  _proto2.construct = function construct(name, age) {
    this.name = name;
    this.age = age;
  };

  return My;
}(Person);
```