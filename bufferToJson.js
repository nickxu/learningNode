"use strict";
let buf = new Buffer("This is my pretty example");
let json = JSON.stringify(buf);
console.log(json);

let buf2 = new Buffer(JSON.parse(json).data);
console.log(buf2.toString());

console.log(buf2.toString('ascii'));
console.log(buf2.toString('utf-8', 11, 17));
