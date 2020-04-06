var util = require('util');

var test = {a: {b: {c: {d: {e: 'tree'}}}}};

console.log(test);


var str = JSON.stringify(test, null, 3);
console.log(str);

var name = 'John';
var age = 12;
console.log('%s age is %d', name, age);

// string and number
var msg = util.format('The name is %s and the age is %d', name, age);
console.log(msg);

// json
var result = util.format('the response from server is %j', test);
console.log(result);

// percent
var ratio = 0.23;
var ratioStr = util.format('the limit percent is %d%%', ratio);
console.log(ratioStr);