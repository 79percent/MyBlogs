var arr = [1, [2, [3, 4]]];

/**
 * 1. 用Array.prototype.flat()
 */
function flatten1(arr = []) {
  return arr.flat(Infinity);
}
// console.log(flatten1(arr));

/**
 * 2. 递归
 */
function flatten2(arr = []) {
  let newArr = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      newArr = [...newArr, ...flatten2(item)];
      // newArr.push(...flatten2(item));
      // newArr = newArr.concat(flatten2(item));
    } else {
      newArr.push(item);
    }
  })
  return newArr;
}
// console.log(flatten2(arr));

/**
 * 3. while循环
 */
function flatten3(arr = []) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
// console.log(flatten3(arr));
