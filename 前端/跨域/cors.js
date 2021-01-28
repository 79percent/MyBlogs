const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  switch (pathname) {
    case '/api/data':
      res.writeHead(200, {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8888'
      })
      const data = {
        status: 0,
        list: [
          {
            name: 'gcf',
            age: 11
          }
        ]
      }
      res.write(JSON.stringify(data))
      break;

    default:
      res.write('api path does not exist')
      break;
  }
  res.end();
})

server.listen(9090, 'localhost', () => {
  console.log('locahost:9090 start')
})