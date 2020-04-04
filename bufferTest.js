let buf = new Buffer(5);
buf.fill(1);
// <Buffer 01 01 01 01 01>
console.log(buf);

let strBuf = new Buffer('1234567890');
// <Buffer 31 32 33 34 35 36 37 38 39 30>
console.log(strBuf);

let a = [1, 2, 3];
let b = Buffer.from(a);
// <Buffer 01 02 03>
console.log(b);

let a2 = new Uint8Array([1, 2, 3])
let b2 = Buffer.from(a2);
// <Buffer 01 02 03>
console.log(b2);

let b3 = Buffer.alloc(10);
// <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(b3);

let b4 = Buffer.allocUnsafe(10);
// <Buffer 78 e9 1f af 94 01 00 00 80 e9>
console.log(b4);
