/**
 * async 为各种异步模式提供控制流能力
 */
var fs = require('fs');
var async = require('async');

async.waterfall(
  // 异步任务数组，每一个函数都需要一个回调作为其最后一个参数
  [
    function readData(callback) {
      fs.readFile('./data/data1.txt', 'utf8', function (err, data) {
        callback(err, data);
      })
    },

    function modify(text, callback) {
      var adjdata = text.replace(/data/g, 'burningbird.net');
      callback(null, adjdata);
    },

    function writeData(text, callback) {
      fs.writeFile('./data/data1.txt', text, function (err) {
        callback(err, text);
      });
    }
  ],
  // 最终回调函数
  function (err, result) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(result);
    }
  });
