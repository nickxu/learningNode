/**
 * 异步方法调用
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

var Obj = function () {
};

Obj.prototype.doSomething = function (arg1_) {
  var callback_ = arguments[arguments.length - 1];
  // *** 入参的最后一个参数是callback 回调函数

  callback = (typeof callback_ == 'function' ? callback_ : null);
  // 或者采用typeof(callback_)

  var arg1 = typeof arg1_ === 'number' ? arg1_ : null;
  // 判断是否数字类型

  if (!arg1) {
    return callback(new Error('first arg missing or not a number'));
    // *** callback的第一个参数是error，这种可以称之为错误优先模式
  } else {
    process.nextTick(function () {
      var data = fib(arg1);
      callback(null, data);
      // *** 如果没有发生错误，在回调中传递数据
      // *** 如果没有错误，就在error的位置传null
    });
  }
};

var test = new Obj();
var number = 50;

test.doSomething(number, function (err, value) {
  if (err) {
    console.error(err);
  } else {
    console.log('fibonaci value for %d is %d', number, value);
  }
});

console.log('called doSomething');
