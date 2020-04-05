console.log(require.resolve('http'));
console.log(require);
console.log(require.resolve('async'));
// Error: Cannot find module 'async'
console.log(require.resolve('underscore'));

