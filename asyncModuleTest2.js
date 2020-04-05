var fs = require('fs'), async = require('async'), _dir = './data/';

var writeStream = fs.createWriteStream('./log.txt', {
  'flags': 'a', 'encoding': 'utf8', 'mode': 0o666
});

async.waterfall(
  [
    function readDir(callback) {
      fs.readdir(_dir, function (err, files) {
        callback(err, files);
      })
    },

    function loopFiles(files, callback) {
      // async.eachLimit(files, files.length, function (current, eachCallback) {
      //   // 多个文件的时候，会调用多次，怎么处理？
      //   eachCallback(null, current);
      // }, function (err, file) {
      //   callback(err, file)
      // });

      // TODO 这里会产生异常：Error: Callback was already called.
      files.forEach(function (name) {
        callback(null, name);
      });
    },

    function checkFile(file, callback) {
      fs.stat(_dir + file, function (err, stats) {
        callback(err, stats, file);
      })
    },

    function readData(stats, file, callback) {
      if (stats.isFile()) {
        fs.readFile(_dir + file, 'utf8', function (err, data) {
            callback(err, file, data);
          }
        )
      }
    },

    function modify(file, text, callback) {
      var adjdata = text.replace(/data/g, 'burningbird.net');
      callback(null, file, text);
    },

    function writeData(file, text, callback) {
      fs.writeFile(_dir + file, text, function (err) {
        callback(err, file);
      })
    },

    function logChange(file, callback) {
      writeStream.write('changed ' + file + '\n', 'utf8', function (err) {
        callback(err);
      })
    }
  ],
  function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('modified files');
    }
  }
);