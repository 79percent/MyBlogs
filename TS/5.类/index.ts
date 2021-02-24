(function () {
  class Person {
    static personName: string = "葛"; // 静态属性
    age: number = 12; // 实例属性
    readonly sex: string = "male"; // 只读属性
    sayHello() {
      console.log("hellow");
    }
    static sayName() {
      console.log(Person.personName);
    }
    sayAge = () => {
      console.log(this.age);
    };
  }

  const p = new Person();
  console.log(p);
})();

(function () {
  class Dog {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayName() {
      console.log(this.name);
    }
  }

  const dog = new Dog("小黑");
  console.log(dog);

  class Husky extends Dog {
    type: string;
    age: number;
    constructor(name: string, age: number) {
      super(name);
      this.type = "哈士奇";
      this.age = age;
    }
    sayType() {
      console.log(`我是哈士奇, ${this.age}岁了`);
    }
    sayName() {
      super.sayName();
    }
  }

  const husky = new Husky("小哈", 1);
  console.log(husky);
  husky.sayType();
  husky.sayName();
})();

(function () {
  /**
   * 抽象类, 只能被继承，不能用来实例化的类
   */
  abstract class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    printInfo() {
      console.log(`${this.name}, ${this.age}岁`);
    }
    abstract sayHello(): void;
  }
  class Dog extends Animal {
    type: string;
    constructor(name: string, age: number, type: string) {
      super(name, age);
      this.type = type;
    }
    sayHello() {
      console.log("汪汪汪");
    }
  }
  const husky = new Dog("小哈", 1, "哈士奇");
  husky.printInfo();
  husky.sayHello();
})();
