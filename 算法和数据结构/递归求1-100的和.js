/**
 * 用js递归的方式写1到100求和？
 */
function sum(n, m) {
  let num = n + m;
  if (m >= 100) {
    return num;
  } else {
    return sum(num, m + 1);
  }
}

console.log(sum(1, 2));