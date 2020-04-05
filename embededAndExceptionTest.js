// sync version
// var fs = require('fs');
// try {
//   var data = fs.readFileSync('./apples.txt', 'utf8');
//   console.log(data);
//   var adjData = data.replace(/[Aa]pple/g, 'orange');
//   fs.writeFileSync('./oranges.txt', adjData);
// } catch (e) {
//   console.error(e);
// }

// async version
// 函数之间通过嵌套回调来保证正确的调用顺序
var fs = require('fs');
var data = fs.readFile('./apples1.txt', function (err, data) {
  if (err) {
    console.error(err);
    console.error(err.stack);
  } else {
    console.log(data);
    var adjData = data.toString().replace(/[Aa]pple/g, 'blueberry');
    fs.writeFile('./blueberries.txt', adjData, function (err) {
      if (err) {
        console.error(err);
        console.error(err.stack);
      }
    });
  }
});
