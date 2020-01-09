'use strict';

function one_add_next_multiply_three(collection){
  var result = [];
  for(var i = 0; i < collection.length - 1; i++) { //TODO: forEach或者map都可以
    result.push((collection[i] + collection[i + 1]) * 3);
  }
  return result;
}

module.exports = one_add_next_multiply_three;
