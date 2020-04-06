var http = require('http');
var queryString = require('querystring');

var server = http.createServer().listen(8124);

server.on('request', function (request, response) {
  if (request.method == 'POST') {
    var body = '';
    // append data chunk to body
    request.on('data', function (data) {
      body += data;
    });

    request.on('end', function () {
      var post = queryString.parse(body);
      console.log(post);

      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('Hello World\n');
    })
  }
});

console.log('Server listening on 8124');