(() => {
  /**
   * 在定义函数和类时，如果遇到类型不确定就可以使用泛型
   */
  function fn<T>(a: T): T {
    return a;
  }
  fn(1);
  fn<string>("a");

  function fn2<T, K>(a: T, b: K): T | K {
    return a;
  }
  fn2<string, number>("s", 1);
  interface Props {
    name: string;
  }
  function fn3<P extends Props>(props: P): string {
    return props.name;
  }
  fn3({
    name: "aa",
  });

  class MyClass<T> {
    name: T;
    constructor(name: T) {
      this.name = name;
    }
  }
  const my = new MyClass<string>("aa");
})();
