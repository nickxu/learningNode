var http = require('http');
var server = http.createServer().listen(8124);
server.on("request", function (request, response) {

  console.log(request.headers);
  console.log(request.httpVersion);
  console.log(request.rawHeaders);
  console.log(request.rawTrailers);

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
});

console.log('Server running at http://localhost:8124');