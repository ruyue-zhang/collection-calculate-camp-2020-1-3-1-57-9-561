'use strict';

var even_asc_odd_desc = function(collection){
  let even = collectAllEvenAsc(collection);
  let odd = collectAllOddDes(collection);
  return even.concat(odd);
};

function collectAllEvenAsc(collection) {
  let even = collection.filter(value=>{return !(value % 2)}); //TODO: 不用写return, 如果只有一行实现
  even.sort((a,b)=>{return a - b;}); //TODO: 不用写return, 如果只有一行实现
  return even;
}

function collectAllOddDes(collection) {
  let odd = collection.filter(value=>{return value % 2}); //TODO: 不用写return, 如果只有一行实现
  odd.sort((a,b)=>{return b - a}); //TODO: 不用写return, 如果只有一行实现
  return odd;
}

module.exports = even_asc_odd_desc;
