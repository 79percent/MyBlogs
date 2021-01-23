// 文件读写
const fs = require('fs');

const data = {
  name: 'gcf',
  age: 1,
}

const jsonData = JSON.stringify(data);

fs.writeFile('./2.data.json', jsonData, (err, data) => {
  if (err) {
    return;
  } else {
    console.log(data);
  }
});