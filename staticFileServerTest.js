var http = require('http');
var fs = require('fs');
var webRoot = './';

http.createServer(function (request, response) {
  var requestPath = request.url;
  var filePath = requestPath.replace(/^.+[/]/g, '');
  pathname = webRoot + filePath;
  console.log(pathname);
  // 使用readfile对于大批量处理请求不适合，会加重系统性能
  // fs.readFile(base, 'utf8', function (err, data) {
  //   if (err) {
  //     console.error(err)
  //   } else {
  //     response.write(data);
  //     response.end();
  //   }
  // });

  response.setHeader('Content-Type', 'text/html');

  // create and pipe readable stream
  var file = fs.createReadStream(pathname);
  file.on('open', function () {
    response.statusCode = 200;
    file.pipe(response);
  });

  file.on('error', function (err) {
    response.writeHead(403);
    response.write('file is missing , or no permission problem');
    console.log(err);
  })


}).listen(8124);

console.log('Static Server running at 8124');