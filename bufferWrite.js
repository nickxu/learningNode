var buf = new Buffer(4);
buf.writeUInt8(0x63, 0);
buf.writeUInt8(0x61, 1);
buf.writeUInt8(0x74, 2);
buf.writeUInt8(0x73, 3);

console.log(buf.toString());

let part1 = buf.readUInt8(1);
console.log(part1);

buf[0] = 0x61;
console.log(buf.toString());

// 使用slice,修改新buffer也会更改原来的buffer
let subBuf = buf.slice(0, 2);
subBuf[0] = 0x62;
console.log(buf.toString());
console.log(subBuf.toString());

subBuf.fill(0x61);
console.log(buf.toString());
console.log(subBuf.toString());

// 测试两个buffer是否相等用equals
var arr = [0x61, 0x61, 0x74, 0x73];
let buf2 = Buffer.from(arr);
console.log(buf.toString());
console.log(buf2.toString());
console.log(buf2);
console.log(buf.equals(buf2));

// copy old buffer to new buffer
var newBuf = new Buffer(2);
buf.copy(newBuf);
console.log(newBuf.toString());

// 比较两个buffer
// 相同返回 0
console.log(buf2.compare(buf));
// 前者小，返回-1
console.log(newBuf.compare(buf2));
// 前者大，返回1
console.log(buf2.compare(newBuf));