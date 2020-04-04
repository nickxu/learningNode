"use strict"
let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder("utf-8");
let euro = new Buffer([0xE2, 0x82]);
let euro2 = new Buffer([0xAC]);

console.log(decoder.write(euro));
console.log(decoder.write(euro2));

console.log(euro.toString());
console.log(euro2.toString());

let euro3 = new Buffer([0xE2, 0x82, 0xAC]);
console.log(euro3.toString());

let euro4 = new Buffer(3);
euro4.write('€', "utf-8");
console.log(euro4.toString());

console.log(euro3.toString() == euro4.toString());

console.log(euro4.length);
