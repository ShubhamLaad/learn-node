var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200);
  response.write('Hello Wold');
  response.end();  
}).listen(8080);

console.log('Listening port 8080....');