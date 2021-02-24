(() => {
  class Person {
    public name: string; // 默认为public，任何地方都能访问
    private _age: number; // 只能在当前类中访问
    protected num: number; // 只能在当前类和子类中访问，不能在实例中访问
    constructor(name: string, age: number) {
      this.name = name;
      this._age = age;
      this.num = 0;
    }
    get age() {
      return this._age;
    }
    set age(age: number) {
      if (age >= 0) {
        this.age = age;
      } else {
        console.error("年龄必须大于0");
      }
    }
  }
  const p = new Person("葛", 22);
  p.name = "a";
  p.age;
  p.age = -10;
  p.age;
  console.log(p);

  class A {
    /**
     * 简写
     */
    constructor(private name: string) {}
  }
  const a = new A("xxx");
})();
