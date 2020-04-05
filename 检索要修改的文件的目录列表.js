var fs = require('fs');

let options = {
  'flags': 'a',
  'encoding': 'utf8',
  'mode': 0o666
};

var count = 0;
let filePath = './log.log';
let writeStream = fs.createWriteStream(filePath, options);
// createWriteStream 是异步的；且没有提供捕获错误的回调函数

writeStream.on('open', function () {
  // get list of files
  fs.readdir('./data', function (err, files) {
    var filesCount = files.length;

    // for each file
    if (err) {
      console.error(err.message);
    } else {
      files.forEach(function (name) {
          // 判断目录下的文件是否文件夹
          fs.stat('./data/' + name, function (err, stats) {
            if (err) {
              return err;
            }
            if (!stats.isFile()) {
              return;
            }

            count++;
            fs.readFile('./data/' + name, 'utf8', function (err, data) {
              console.log('read file ' + name);
              if (err) {
                console.error(err.message);
              } else {
                // log write
                writeStream.write('changed ' + name + '\n', 'utf8', function (error) {
                  console.log('write into log file from ' + name);

                  if (error) {
                    console.error(error.message)
                  }

                  // 这才是说明了所有文件都读取并写入了log
                  if (count == filesCount) {
                    console.log('all files writed!')
                  }
                })
              }
            })
          });

          // modify contents
        }
      );
      // 这里并不是说所有任务都完成了，而是表示foreach事件没有收到阻塞。
      console.log('all done')
    }
  });
});

writeStream.on('error', function (err) {
  console.error('ERROR:' + err)
});

// 打印的结果
//all done
// read file data2.txt
// read file data1.txt
// read file data4.txt
// read file data3.txt
// write into log file from data2.txt
// write into log file from data1.txt
// write into log file from data4.txt
// write into log file from data3.txt
