var timeoutObj = setTimeout(function () {
  console.log('abc');
}, 2000);

setTimeout(function () {
  clearTimeout(timeoutObj);
  console.log('timer is canceled');
}, 2000, timeoutObj);

let interval = setInterval(function () {
  console.log('print interval');
}, 2000);

setTimeout(function () {
  clearInterval(interval);
  console.log('interval is canceled')
}, 6000);