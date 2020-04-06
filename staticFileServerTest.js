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

  // create and pipe readable stream
  // var file = fs.createReadStream(pathname);
  // file.on('open', function () {
  //   response.statusCode = 200;
  //   file.pipe(response);
  // });
  //
  // file.on('error', function (err) {
  //   response.writeHead(403);
  //   response.write('file is missing , or no permission problem');
  //   console.log(err);
  // })

  response.setHeader('Content-Type', 'text/html');

  // use fs.stat来判断文件的类型与是否存在
  fs.stat(pathname, function (err, stats) {
    if (err) {
      console.log(err);
      response.writeHead(404);
      response.write('Resource missing. 404\n');
      response.end();
    } else {
      response.setHeader('Content-Type', 'text/html');

      var file = fs.createReadStream(pathname);
      file.on('open', function () {
        response.writeHead(200);
        file.pipe(response);
      });

      file.on("error", function (err) {
        console.error(err);
        response.writeHead(500);
        response.write('File is missing or Permission denied');
        response.end()
      })
    }
  })




}).listen(8124);

console.log('Static Server running at 8124');