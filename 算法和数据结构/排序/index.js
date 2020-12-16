
/**
 * 快速排序(递归实现)
 * 思想： 
 * 随便取一个数作为基数base，将数组中小于base的数放到左边，大于base的数放到右边，
 * 这样对于base来说就是有序的
 * 重复以上步骤，直到left或者right长度小于1
 * @param {*} arr 
 */
function quickSort(arr = []) {
  if (arr.length <= 1) {
    return arr;
  }
  let base = arr[0];
  let left = [];
  let right = [];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < base) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  return [...left, base, ...right];
}
// var arr = [1, 34, 5, 76, 8, 6, 9, 7, 6, 3];
// var res = quickSort(arr);
// console.log(res);

/**
 * 冒泡排序
 * @param {*} arr 
 */
function bubbleSort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// var arr = [1, 34, 5, 76, 8, 6, 9, 7, 6, 3];
// var res = bubbleSort(arr);
// console.log(res)

/**
 * 选择排序
 * 思想：
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
 * 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 重复第二步，直到所有元素均排序完毕。
 * @param {*} arr 
 */
function selectSort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
// var arr = [1, 34, 5, 76, 8, 6, 9, 7, 6, 3];
// var res = selectSort(arr);
// console.log(res)