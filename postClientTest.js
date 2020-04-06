var http = require('http');
var queryString = require('querystring');

var postData = queryString.stringify({
  'msg': 'Hello Server'
});

var options = {
  hostname: 'localhost',
  port: 8124,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

var req = http.request(options, function (response) {
  console.time('client-time');

  console.log('Status' + response.statusCode);
  console.log('HEADERS:' + JSON.stringify(response.headers));
  response.setEncoding('utf8');
  //get data as chunks
  response.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });

  // end response
  response.on('end', function () {
    console.log('No more data in response');
  })

  console.timeEnd('client-time');
});

req.on('error', function (e) {
  console.error('Problem happens: ' + e.message)
});

req.write(postData);
req.end();