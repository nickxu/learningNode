var http = require('http');

var server = http.createServer().listen(8124);

server.on('request', function (request, response) {
  response.write('test1111');
  response.end('asdfasdf');
});

console.log('Server start at 8124');