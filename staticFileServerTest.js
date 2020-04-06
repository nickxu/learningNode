var http = require('http');
var fs = require('fs');
var base = 'index.html';

http.createServer(function (request, response) {
  pathname = base + request.url;
  console.log(pathname);

  fs.readFile(base, 'utf8', function (err, data) {
    if (err) {
      console.error(err)
    } else {
      response.write(data);
      response.end();
    }
  });
}).listen(8124);

console.log('Static Server running at 8124');