var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  // 读取请求参数
  var name = require('url').parse(req.url, true).query.name;
  
  if(name === undefined){
    name = 'world';
  } 
  
  if(name === 'burningbird'){
    // 文件名称
    var file = 'burningbird.png';

    // fs.stat 验证文件的存在，也会返回一个包含文件信息的对象，包括文件的大小
    fs.stat(file, function(err, stat){
      if (err) {
        console.error(err);
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Sorry, Burningbird isn't around right now \n");
      } else {
        // 读取文件（同步读取）
        var img = fs.readFileSync(file);
        res.contentType = 'image/png';
        // 文件大小
        res.contentLength = stat.size;
        res.end(img, 'binary');
      }
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello ' + name + '\n');
  }
}).listen(8124);

console.log('server running at http://localhost:8124/');