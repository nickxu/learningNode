var http = require('http');
var request = http.request({
  hostname: 'localhost',
  port: 8124,
  method: 'GET',
  agent: false // 禁止连接池

}, function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log(data);
  });

  response.on('end', function () {
    console.log('No more data in response');
  });
});

request.on('error', function (e) {
  console.error('Problem happens: ' + e.message)
});

request.write("asdfasdf");
request.end();

// TODO Problem happens: socket hang up