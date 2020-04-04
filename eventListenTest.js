var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
  console.log('3.request event');
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.end('hello world\n');

});

server.on('connection', function () {
  console.log('2.connection event');
});

server.listen(8124, function () {
  console.log('1.listening event');
});

console.log('Server running on port 8124');