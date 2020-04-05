// var timer = setTimeout(function (name) {
//   console.log('Hello timer ' + name);
// }, 3000, 'Shelley');
//
// timer.unref();
//
// console.log('wait on timer');

var interval = setInterval(function (name) {
  console.log('Hello interval ' + name);
}, 3000, 'shelley');

// 中间层的计时器使得外层的计时器继续进行，直到中间计时器结束
var timer2 = setTimeout(function (interval) {
  clearInterval(interval);
  console.log('clear timer')
}, 30000, interval);

timer2.unref();

console.log('waiting on first interval...');