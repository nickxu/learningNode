var fs = require('fs');
fs.readdir('./data/', function (err, files) {
  files.forEach(function (name) {
    var content = new Date().getTime() + name;
    console.log('begin write into file ' + name);
    fs.writeFile('./data/' + name, content, 'utf8', function (err) {
      console.log('after write into file ' + name);
      if (err) {
        console.error(err);
      }
    })
  })
});
console.log('start write content to files in data');