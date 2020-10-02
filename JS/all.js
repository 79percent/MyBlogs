const fs = require('fs');

function after(times, cb) {
  const student = {};
  return (key, value) => {
    student[key] = value;
    if (--times === 0) {
      cb(student);
    }
  }
}

const out = after(2, res => {
  console.log(res);
})

fs.readFile('./text/name.txt', 'utf8', (err, data) => {
  console.log(data)
  out('name', data);
});

fs.readFile('./text/age.txt', 'utf8', (err, data) => {
  console.log(data)
  out('age', data);
});
