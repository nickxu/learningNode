var dns = require('dns');

dns.lookup('www.baidu.com', {all: true}, function (err, address, family) {
  if (err) {
    console.error(err)
  } else {
    console.log(address);
    console.log(family);
  }
});

dns.resolve('www.baidu.com', 'CNAME', function (err ,addresses) {
  if(err){
    console.error(err);
  }else{
    console.log(addresses);
  }
});