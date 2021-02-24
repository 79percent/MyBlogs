/**
 * 声明变量时，定义变量的类型
 */
var isDone = false;
var createdByNewBoolean = new Boolean(1); // 使用new 构造函数
var decLiteral = 6;
var myName = "Tom";
var unusable = undefined;
var unusable2 = null;
var u = undefined;
var n = null;
function alertName() {
    alert("My name is Tom");
}
function sum(a, b) {
    return a + b;
}
/**
 * 永远不会返回结果
 */
function printl() {
    throw new Error("报错");
}
/**
 * 字面量,相当于常量了,值在范围之内
 */
var a;
a = 10;
// a = 11 // 报错 a只能等于10
/**
 * 联合类型
 */
var b;
b = "male";
b = "female";
var c;
c = true;
c = 1;
/**
 * 任意类型
 */
var d;
d = 1;
d = "a";
d = [];
/**
 * d的类型是any，可以赋值给任何变量
 */
var d2;
d2 = d;
/**
 * 未知类型
 */
var e;
e = 1;
e = true;
/**
 * e的类型是unknown,不能将类型“unknown”赋值给其他变量，需要先做类型检查/类型断言
 */
var e2;
if (typeof e === "string") {
    e2 = e;
}
/**
 * 类型断言，告诉编译器变量的类型
 * 两种写法
 */
e2 = e;
e2 = e;
/**
 * 对象
 */
var o = {};
o = { name: 1 };
o = function () { };
var f;
f = { a: 1 };
f = [];
/**
 * ?可选属性，可以有，也可以没有
 */
var g;
g = { name: "a" };
g = { name: "a", age: 11 };
g = { name: "a", age: 11, sex: "male" };
/**
 * 函数类型声明
 */
var h;
h = function (a, b) {
    return a + b;
};
/**
 * 合起来写
 */
// let h: (a: number, b: number) => number = (a, b) => {
//   return a + b;
// };
/**
 * 定义数组类型
 */
var i;
i = ["1"];
var j;
j = [1];
/**
 * 元组， 数组长度数量固定
 */
var k;
k = ["a", 12];
/**
 * 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    console.log(Gender)
})(Gender || (Gender = {}));
var l;
l = Gender.Female;
l = Gender.Male;
