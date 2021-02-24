(function () {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this._age = age;
            this.num = 0;
        }
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (age) {
                if (age >= 0) {
                    this.age = age;
                }
                else {
                    console.error("年龄必须大于0");
                }
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var p = new Person("葛", 22);
    p.name = "a";
    p.age;
    p.age = -10;
    p.age;
    console.log(p);
    var A = /** @class */ (function () {
        /**
         * 简写
         */
        function A(name) {
            this.name = name;
        }
        return A;
    }());
    var a = new A("xxx");
})();
