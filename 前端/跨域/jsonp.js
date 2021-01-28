const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  switch (pathname) {
    case '/api/data':
      const data = {
        status: 0,
        list: [
          {
            name: 'gcf',
            age: 11
          }
        ]
      }
      const jsScript = `${query.cb}(${JSON.stringify(data)})`
      res.write(jsScript)
      break;

    default:
      res.write('api path does not exist')
      break;
  }
  res.end();
})

server.listen(9000, 'localhost', () => {
  console.log('locahost:9000 start')
})