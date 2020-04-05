var fs = require('fs'), async = require('async'), _dir = './data/';

async.series({
  task1: function (callback) {
    fs.readFile(_dir + 'data1.txt', 'utf8', function (err, result) {
      callback(err, result);
    })
  },

  task2: function (callback) {
    fs.readFile(_dir + 'data2.txt', 'utf8', function (err, result) {
      callback(err, result);
    })
  },

  task3: function (callback) {
    fs.readFile(_dir + 'data3.txt', 'utf8', function (err, result) {
      callback(err, result);
    })
  }
}, function (err, result) {
  if (err) {
    console.err(err)
  } else {
    console.log(result)
  }
});