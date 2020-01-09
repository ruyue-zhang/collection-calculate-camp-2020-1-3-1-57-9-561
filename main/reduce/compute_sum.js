'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  return collection.reduce((total, currentValue)=>{
    return total + currentValue; //TODO: 不用写return, 如果只有一行实现
  })
}

module.exports = calculate_elements_sum;

