/*  CS-3  */
/* node v0.10.x stream2 api */

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200);

/*   request.on('readable', function () {
    var chunk = null;
    while (null !== (chunk = request.read())) {
      // Return back to client
      response.write(chunk);
    }
  }); */
  //Above code is equal to request.pipe(response); 
  request.pipe(response);
  
  request.on('end', function () {
    response.end();
  });
}).listen(8080);

console.log('Listening port 8080....');