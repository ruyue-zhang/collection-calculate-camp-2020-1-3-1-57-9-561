'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if(number_a <= number_b) {
    getIncrease(number_a, number_b, result);
    return result;
  }
  else {
    getIncrease(number_b, number_a, result);
    return result.reverse();
  }
}

function getIncrease(min, max, result) {
  for(let i = min; i <= max; i++) {
    result.push(i);
  }
}

module.exports = get_integer_interval;

