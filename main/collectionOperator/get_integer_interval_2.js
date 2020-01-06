'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if(number_a <= number_b) {
    getIncrease(number_a, number_b, result);
    return collectAllEven(result);
  }
  else {
    getIncrease(number_b, number_a, result);
    return collectAllEven(result).reverse();
  }
}

function getIncrease(min,max,result) {
  for(let i = min; i <= max; i++) {
    result.push(i);
  }
}

function collectAllEven(collection) {
  return collection.filter(value=>{return !(value % 2)});
}

module.exports = get_integer_interval_2;
