/**
 * 声明变量时，定义变量的类型
 */
let isDone: boolean = false;
let createdByNewBoolean: Boolean = new Boolean(1); // 使用new 构造函数
let decLiteral: number = 6;
let myName: string = "Tom";
let unusable: void = undefined;
let unusable2: void = null;
let u: undefined = undefined;
let n: null = null;
function alertName(): void {
  alert("My name is Tom");
}
function sum(a: number, b: number): number {
  return a + b;
}
/**
 * 永远不会返回结果
 */
function printl(): never {
  throw new Error("报错");
}
/**
 * 字面量,相当于常量了,值在范围之内
 */
let a: 10;
a = 10;
// a = 11 // 报错 a只能等于10

/**
 * 联合类型
 */
let b: "male" | "female";
b = "male";
b = "female";

let c: boolean | number;
c = true;
c = 1;

/**
 * 任意类型
 */
let d: any;
d = 1;
d = "a";
d = [];

/**
 * d的类型是any，可以赋值给任何变量
 */
let d2: string;
d2 = d;

/**
 * 未知类型
 */
let e: unknown;
e = 1;
e = true;

/**
 * e的类型是unknown,不能将类型“unknown”赋值给其他变量，需要先做类型检查/类型断言
 */
let e2: string;
if (typeof e === "string") {
  e2 = e;
}

/**
 * 类型断言，告诉编译器变量的类型
 * 两种写法
 */
e2 = e as string;
e2 = <string>e;

/**
 * 对象
 */
let o: object = {};
o = { name: 1 };
o = function () {};

let f: {};
f = { a: 1 };
f = [];

/**
 * ?可选属性，可以有，也可以没有
 */
let g: { name: string; age?: number; [key: string]: any };
g = { name: "a" };
g = { name: "a", age: 11 };
g = { name: "a", age: 11, sex: "male" };

/**
 * 函数类型声明
 */
let h: (a: number, b: number) => number;
h = (a, b) => {
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
let i: string[];
i = ["1"];

let j: Array<number>;
j = [1];

/**
 * 元组， 数组长度数量固定
 */
let k: [string, number];
k = ["a", 12];

/**
 * 枚举
 */
enum Gender {
  Male = 0,
  Female = 1,
}
let l: Gender;
l = Gender.Female;
l = Gender.Male;

/**
 * &同时满足类型
 */
let m: { name: string } & { age: number };
m = { name: "a", age: 11 };

/**
 * 类型别名
 */
type myType = 1 | 2 | 3;
let nn: myType;
nn = 1;
