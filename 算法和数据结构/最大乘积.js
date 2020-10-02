/**
 * 给定一个无序数组，可能包含正数、负数和0，要求从中找出3个数的乘积，使得乘积最大
 */
// 输入:  nums = [3,4,1,2]
// 输出: 24

function maxMultiply(arr = []) {
  let max1 = getMax(arr);
  let max2 = getMax(arr);
  let max3 = getMax(arr);
  return max1 * max2 * max3;
}

function getMax(arr = []) {
  if (!Array.isArray(arr) || arr.length === 0)
    return arr;
  let max = arr[0];
  let maxIndex = 0;
  arr.forEach((item, index) => {
    if (max < item) {
      max = item;
      maxIndex = index;
    }
  })
  arr = arr.splice(maxIndex, 1);
  return max;
}

const testArr = [3,-4,0,2];
const res = maxMultiply(testArr);
console.log(res);