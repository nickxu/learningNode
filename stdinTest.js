// 如果不设置encoding，就会抛出TypeError: input.trim is not a function
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function () {
  var input = process.stdin.read();
  if (input !== null) {
    // echo the text
    process.stdout.write(input);

    var command = input.trim();
    if (command == 'exit') {
      process.exit(0);
    } else {
      process.stdout.write("bye," + input);
    }
  }
});