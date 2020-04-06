var lo = require('lodash');

console.log('------------- javascript-------------');

for (var i = 0; i < 5; i++) {
  console.log(i)
}


console.log('------------ lodash ----------------')
lo.times(5, function (a) {
  console.log(a);
});

var ownerArr = [{
  'owner': 'Colin',
  'pets': [{'name': 'dog1'}, {'name': 'dog2'}]
}, {
  'owner': 'John',
  'pets': [{'name': 'dog3'}, {'name': 'dog4'}]
}];

var jsMap = ownerArr.map(function (owner) {
  return owner.pets[0].name;
});

console.log('-------------- jsMap -------------------');
console.log(jsMap);

var lodashMap = lo.map(ownerArr, 'pets[0].name');
console.log('--------------- lodashMap --------------');
console.log(lodashMap);

console.log('--------------- deep clone --------------');
var objA = {'name': 'Admen'};
var objB = lo.cloneDeep(objA);
objA.age = '27';

console.log(objA);
console.log(objB);

console.log('--------------- get random number in range --------------');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomNumber(15, 20));

console.log(lo.random(15, 20));

console.log('--------------- extend Object --------------');
Object.prototype.extend = function (obj) {
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      this[i] = obj[i];
    }
  }
};

var objC = {'name': 'lumia', 'type': 'candle'};
var objD = {'address': 'castle', 'age': 'unkown'};
var objE = {'name': 'chip', 'type': 'cup'};
objC.extend(objD);

console.log(objC);

console.log(lo.assign(objE, objD));

console.log('--------------- sample --------------');
