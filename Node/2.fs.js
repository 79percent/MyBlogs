// 文件读写
const fs = require('fs');

// const data = {
//   name: 'gcf',
//   age: 1,
// }

// const jsonData = JSON.stringify(data);

// fs.writeFile('./2.data.json', jsonData, (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });

/**
 * 创建文件夹
 */
// fs.mkdir('logs', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('文件夹创建成功')
// })

/**
 * 修改文件夹名称
 */
// fs.rename('./logs', './log', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('文件夹名称修改完成')
// })

/**
 * 删除文件夹
 */
// fs.rmdir('./log', () => {
//   console.log('删除文件夹成功')
// })

/**
 * 写入文件
 */
// fs.writeFile('./2.data.json', 'hello\nworld', (err, data) => {

// });

/**
 * 插入文件内容
 */
// fs.appendFile('./2.data.json', '!!!', (err) => {
//   if (err)
//     throw err;
//   console.log('插入文件内容成功')
// })

/**
 * 读取文件
 */
// fs.readFile('./2.data.json', 'utf-8', (err, res) => {
//   if (err)
//     throw err;
//   console.log(res) // buffer 数据流 ,需要传入第二个参数, 或者tostring()转成字符串
// })

/**
 * 删除文件
 */
// fs.unlink('./2.data.json', () => {

// })

/**
 * I/O同步
 */
// console.log('start')
// const content = fs.readFileSync('./2.data.json', 'utf-8');
// console.log(content);
// console.log('end')

/**
 * fsPromise模块返回的是Promise
 */
// const fsPromise = require('fs').promises
// fsPromise.readFile('./2.data.json').then(res => {
//   console.log(res.toString())
// })

/**
 * 循环创建文件
 */
// for (let i = 0; i < 10; i++) {
//   fs.writeFile(`./logs/log-${i}.js`, `console.log(${i})`, (err) => {
//     if (err)
//       throw err;
//   })
// }

/**
 * 判断读取的是文件夹还是文件
 */
const dirPath = './logs';
fs.stat(dirPath, (err, stat) => {
  if (err) {
    throw err;
  }
  console.log(stat);
  if (stat.isFile()) {
    console.log(dirPath + '是文件')
  } else if (stat.isDirectory()) {
    console.log(dirPath + '是文件夹')
  }
});
fs.readdir(dirPath, (err, content) => {
  content.forEach((item, index) => {
    const itemPath = `${dirPath}/${item}`
    fs.stat(itemPath, (err, stat) => {
      if (err) {
        throw err;
      }
      if (stat.isFile()) {
        console.log(itemPath + '是文件')
      } else if (stat.isDirectory()) {
        console.log(itemPath + '是文件夹')
      }
    });
  })
})