"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Person = /** @class */ (function () {
        function Person() {
            var _this = this;
            this.age = 12; // 实例属性
            this.sex = "male"; // 只读属性
            this.sayAge = function () {
                console.log(_this.age);
            };
        }
        Person.prototype.sayHello = function () {
            console.log("hellow");
        };
        Person.sayName = function () {
            console.log(Person.personName);
        };
        Person.personName = "葛"; // 静态属性
        return Person;
    }());
    var p = new Person();
    console.log(p);
})();
(function () {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.sayName = function () {
            console.log(this.name);
        };
        return Dog;
    }());
    var dog = new Dog("小黑");
    console.log(dog);
    var Husky = /** @class */ (function (_super) {
        __extends(Husky, _super);
        function Husky(name, age) {
            var _this = _super.call(this, name) || this;
            _this.type = "哈士奇";
            _this.age = age;
            return _this;
        }
        Husky.prototype.sayType = function () {
            console.log("\u6211\u662F\u54C8\u58EB\u5947, " + this.age + "\u5C81\u4E86");
        };
        Husky.prototype.sayName = function () {
            _super.prototype.sayName.call(this);
        };
        return Husky;
    }(Dog));
    var husky = new Husky("小哈", 1);
    console.log(husky);
    husky.sayType();
    husky.sayName();
})();
(function () {
    /**
     * 抽象类, 只能被继承，不能用来实例化的类
     */
    var Animal = /** @class */ (function () {
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }
        Animal.prototype.printInfo = function () {
            console.log(this.name + ", " + this.age + "\u5C81");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, age, type) {
            var _this = _super.call(this, name, age) || this;
            _this.type = type;
            return _this;
        }
        Dog.prototype.sayHello = function () {
            console.log("汪汪汪");
        };
        return Dog;
    }(Animal));
    var husky = new Dog("小哈", 1, "哈士奇");
    husky.printInfo();
    husky.sayHello();
})();
