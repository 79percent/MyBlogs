/**
 * 判断对象的属性存在于原型上还是自身
 * @param {*} obj 
 * @param  {...any} keys 
 */
function hasOwnProperty(obj = {}, ...keys) {
  const arr = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!(key in obj)) {
      console.error(`${key} is not in Object`);
    } else {
      const where = obj.hasOwnProperty(key) ? 'own' : 'prototype';
      arr.push(where);
    }
  }
  return arr;
}
hasOwnProperty({ a: 1 }, 'a', 'toString', 'b');
// error: b is not in Object
// ["own", "prototype"]