'use strict';

var even_asc_odd_desc = function(collection){
  let even = collectAllEvenAsc(collection);
  let odd = collectAllOddDes(collection);
  return even.concat(odd);
};

function collectAllEvenAsc(collection) {
  let even = collection.filter(value=>{return !(value % 2)});
  even.sort((a,b)=>{return a - b;});
  return even;
}

function collectAllOddDes(collection) {
  let odd = collection.filter(value=>{return value % 2});
  odd.sort((a,b)=>{return b - a});
  return odd;
}

module.exports = even_asc_odd_desc;
