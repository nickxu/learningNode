// runInNewContext and runInThisContext
var vm = require('vm');
// var sandbox = {
//   process: 'this baby',
//   require: 'that'
// };
//
// vm.runInNewContext('console.log(process);console.log(require)', sandbox);

global.count1 = 100;

var count2 = 100;

var txt = 'if(count1 === undefined) var count1 = 0; count1++;' +
  'if(count2 === undefined) var count2 = 0; count2++;' +
  // 上面的count1 和下面的console都是全局对象。
  'console.log("count1 in txt: " + count1); console.log("count2 in txt: " + count2);';

// 用Script对象来让上下文包含全局对象，而不是本地对象p；Script会对代码进行预编译
var script = new vm.Script(txt);
// 为script对象指定文件名
try {
  script.runInThisContext({filename: 'count.vm', displayErrors: false, timeout: 100});
} catch (e) {
  console.error(e);
}

console.log('count1 in global: ' + count1);
console.log('count2 in global: ' + count2);

// 从文件加载脚本
var fs = require('fs');
var script2 = new vm.Script(fs.readFileSync('script.js', 'utf8'));
script2.runInThisContext({filename: 'count2.vm'});
console.log(count1);
console.log(count2);

// createInContext显式第创建上下文
var util = require('util');
var sandbox3 = {
  count3: 1
};
vm.createContext(sandbox3);
if (vm.isContext(sandbox3)) {
  console.log('contextualized');
}

vm.runInContext('count3++; counter = true;', sandbox3, {filename: 'count3.vm'});
console.log(util.inspect(sandbox3));