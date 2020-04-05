/**
 * async parallel
 */
var fs = require('fs'), async = require('async');
var _dir = './data/';

async.parallel(
  {
    data1: function (callback) {
      fs.readFile(_dir + "/data1.txt", 'utf8', function (err, data) {
        callback(err, data);
      });
    },

    data2: function (callback) {
      fs.readFile(_dir + 'data2.txt', 'utf8', function (err, data) {
        callback(err, data);
      })
    },

    data3: function (callback) {
      fs.readFile(_dir + 'data3.txt', 'utf8', function (err, data) {
        callback(err, data);
      })
    }
  },
  function (err, result) {
    if (err) {
      console.error(err)
    } else {
      console.log(result)
    }
  }
);