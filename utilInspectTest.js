var test = {a: {b: {c: {d: {e: 'tree'}}}}};

let util = require('util');
var str = util.inspect(test, {showHidden: true, depth: 4, colors: true});
console.log(str);

console.log(util.inspect.styles);
console.log(util.inspect.colors);

var today = new Date();
var goods = {
  a: {
    b: {
      c: {
        d: 'test'
      },
      c2: 3.50
    },
    b2: true
  },
  a2: today
};

util.inspect.styles.boolean = 'blue';
var result = util.inspect(goods, {depth: 4, colors: true});
console.log(result);

console.dir(goods, {depth: 4, colors: true});

console.log(goods);

console.log(JSON.stringify(goods, null, 4));
