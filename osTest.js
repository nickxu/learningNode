var os = require('os');

console.log('Use end of line: ' + os.EOL + ' to insert a new line');
console.log(os.endianness());
console.log(os.tmpdir());
console.log(os.homedir());

console.log(os.loadavg());
// 内存信息
console.log(os.freemem());
console.log(os.totalmem());
// cpu info
console.log(os.cpus());