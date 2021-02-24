(() => {
  /**
   * 描述一个对象的类型
   */
  type myType = {
    name: string;
    age: number;
  };
  const obj1: myType = {
    name: "a",
    age: 11,
  };
  /**
   * 接口定义一个类的结构
   */
  interface myInterface {
    name: string;
    age: number;
    sayHello(): void;
  }
  const obj2: myInterface = {
    name: "a",
    age: 11,
    sayHello: () => {
      console.log("hello");
    },
  };
  class MyClass implements myInterface {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    sayHello(): void {
      console.log("hello");
    }
  }
})();
