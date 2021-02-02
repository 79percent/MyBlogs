/**
 * 解析路径的模块 path
 */
const path = require('path');

// __dirname: 当前所在文件的物理路径
console.log(__dirname);
console.log(path.resolve(__dirname, '../'));