var events = require('events');
var em = new events.EventEmitter();

var counter = 0;
// 设置事件处理函数来监听事件（on），然后触发(emit)该事件(callback)
setInterval(function () {
  em.emit('timed', counter++);
}, 3000);

let timedCallback = function (data) {
  console.log('timed' + data);
};
em.on('timed', timedCallback);
