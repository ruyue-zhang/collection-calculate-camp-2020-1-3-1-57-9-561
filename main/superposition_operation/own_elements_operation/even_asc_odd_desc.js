'use strict';

var even_asc_odd_desc = function(collection){
  let even = collection.filter(value => !(value % 2)).sort((a, b) => a - b);
  let odd = collection.filter(value => value % 2).sort((a, b) => b - a);
  return even.concat(odd);
};

module.exports = even_asc_odd_desc;
