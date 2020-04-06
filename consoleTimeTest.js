console.time('the-loop');

for (var i = 0; i < 100000000; i++) {
  ;
}

console.timeEnd('the-loop');

console.time('hello-timer');

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
  console.timeEnd('hello-timer');
  console.time('hello-timer');
}).listen(8124);

console.log('Server running at http://localhost:8124');