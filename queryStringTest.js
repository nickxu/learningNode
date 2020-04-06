var queryString = require('querystring');

var str = 'msg=Hello%20World!';

console.log(queryString.parse(str));

var str2 = {
  'name': 'John',
  'age': 18
};

console.log(queryString.stringify(str2));