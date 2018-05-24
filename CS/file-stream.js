var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200);
  var newFile = fs.createWriteStream("reademe_copy.txt");

  request.pipe(newFile);

  request.on('end', function () {
    response.end('uploaded!');
  });
}).listen(8080);

console.log('Listening port 8080....');