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
