## call和apply的共同点
call和apply都是Function原型上的方法，都可以用来绑定this作用域。

## call和apply的区别
区别在于传递的参数方式不一样，性能上也有一点差异。

## call()
Function.prototype.call()
func.call(thisArg, a, b, c...)//后面参数需要一个一个传入，ES6可以使用展开运算符call(thisArg, ...arr)
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"

## apply()
Function.prototype.apply()
func.apply(thisArg, [a, b, c...])//后面参数为1个数组
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

## bind()
Function.prototype.bind()
let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]])
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

## 性能
call比apply好一些（尤其是参数超过3个时，jQuery注释中有提到）