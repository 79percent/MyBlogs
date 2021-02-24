(function () {
    var obj1 = {
        name: "a",
        age: 11
    };
    var obj2 = {
        name: "a",
        age: 11,
        sayHello: function () {
            console.log("hello");
        }
    };
    var MyClass = /** @class */ (function () {
        function MyClass(name, age) {
            this.name = name;
            this.age = age;
        }
        MyClass.prototype.sayHello = function () {
            console.log("hello");
        };
        return MyClass;
    }());
})();
