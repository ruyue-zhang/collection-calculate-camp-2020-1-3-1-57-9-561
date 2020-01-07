'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  return collection.reduce((total, currentValue)=>{
    return total + currentValue;
  })
}

module.exports = calculate_elements_sum;

