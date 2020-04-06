var program = require('commander');

program.version('0.0.1').option('-s, --source [web site]', 'Source web site')
  .option('-f, --file [file name]', 'File name')
  .option('-fn, --file-name [file name]', 'File name')
  .option('-i, --integer <n>', '[an integer argument]', parseInt)
  .option('-d, --drink [drink]', '[Drink]', /^(coke|pepsi|izze)$/i)
  .command('keyword <keyword> [otherKeywords...]').action(function (keyword, otherKeywords) {
  console.log('keyword %s', keyword);
  if (otherKeywords) {
    otherKeywords.forEach(function (eachKeyword) {
        console.log('keyword other %s', eachKeyword);
      }
    );
  }
})
  .parse(process.argv);

console.log(program.source);
console.log(program.file);
console.log(program.fileName);
console.log(program.integer);
console.log(program.drink);

//$ node commanderTest.js --help
// Usage: commanderTest [options]
//
// Options:
//   -V, --version            output the version number
//   -s, --source [web site]  Source web site
//   -f, --file [file name]   File name
//   -h, --help               display help for command

//$ node commanderTest.js --version
// 0.0.1

//$ node commanderTest.js -s ssss -f ffff
// ssss
// ffff

//$ node commanderTest.js --file-name aa
// undefined
// undefined
// aa