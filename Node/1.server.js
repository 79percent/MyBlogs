const http = require('http');

const server = http.createServer((request, response) => {
  const { url } = request;
  response.write(url);
  response.end();
});

server.listen(8090, 'localhost', () => {
  console.log('localhost:8090 start!!!');
});
