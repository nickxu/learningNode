var Cs = require('console').Console;
var fs = require('fs');

var cs = new Cs(process.stdout, process.stderr);

cs.log('testing');

// var cs2 = new console.Console(process.stdout, process.stderr);
// cs2.err('test');

var output = fs.createWriteStream('/stdout.log');
var errorOutput = fs.createWriteStream('./stderr.log');

var logger = new Cs(output, errorOutput);
var count = 5;
logger.log('count : %d', count);