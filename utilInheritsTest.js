var inherits = require('util').inherits;
var em = require('events').EventEmitter;

var Obj = function(){};
inherits(Obj, em);

Obj.prototype.doPrint = function () {
  this.emit('event');
};

var obj = new Obj();
obj.on("doPrint", function(){
  console.log('called do print callback');
});

setInterval(function () {
  obj.doPrint();
}, 2000);