'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if(number_a < number_b) {
    getIncrease(number_a, number_b,result);
    return numberToLetter(result);
  }
  else {
    getIncrease(number_b, number_a,result);
    return numberToLetter(result).reverse();
  }
}

function getIncrease(min,max,result) {
  for(let i = min; i <= max; i++) {
    result.push(i);
  }
}

function numberToLetter(collection) {
  return collection.map(element =>{
      return String.fromCharCode(element + 96);
  });
}

module.exports = get_letter_interval;
