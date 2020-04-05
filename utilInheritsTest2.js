"use strict";

var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

function InputChecker(name, file) {
  this.name = name;
  let filePath = './' + file + '.log';
  let writeOptions = {
    'flag': 'a',
    'encoding': 'utf8',
    'mode': 0o666
  };
  this.writeStream = fs.createWriteStream(filePath, writeOptions);
}

util.inherits(InputChecker, eventEmitter);

InputChecker.prototype.check = function (input) {
  // trim extra white space
  let command = input.trim().substr(0, 3);

  // process command
  if (command == 'wr:') {
    // write data into file
    let paramsOfWriteCallbackFunc = input.substr(3, input.length);
    this.emit('write', paramsOfWriteCallbackFunc);
  } else if (command == 'en:') {
    // end process
    this.emit('end');
  } else {
    this.emit('echo', input);
  }
};

// testing new object and event handling
let ic = new InputChecker('Shelley', 'output');
ic.on('write', function (data) {
  this.writeStream.write(data, 'utf8');
});

ic.on('echo', function (data) {
  process.stdout.write(ic.name + ' wrote ' + data);
});

let echoCallback = function () {
  process.exit();
};
ic.on('end', echoCallback);

// capture input after setting encoding
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function () {
  let input = process.stdin.read();
  if (input !== null) {
    ic.check(input);
  }
});

// on => EventEmitter.addListener. eg, a.on('click', function) = a.addListener('click', function)
// 前提是a 继承了 EventEmitter, util.inherits(a, EventEmitter)
// 类似的，是a.once('click', function) 指触发一次
// 另外可以通过setMaxListeners来修改监听器的数量，0 表示不限制。

ic.removeListener('echo', echoCallback);