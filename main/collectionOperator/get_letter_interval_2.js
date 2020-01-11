'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if(number_a < number_b) {
    getIncrease(number_a, number_b, result);
    return numberToLetter(result);
  }
  else {
    getIncrease(number_b, number_a, result);
    return numberToLetter(result).reverse();
  }
}

function getIncrease(min,max,result) {
  for(let i = min; i <= max; i++) {
    result.push(i);
  }
}

function numberToLetter(collection) {
  return collection.map(element => {
    if(element <= 26) {
      return String.fromCharCode(element + 96);
    }
    else {
      var count = Math.ceil(element / 26) - 1;
      return String.fromCharCode(count + 96) + String.fromCharCode(element - 26 * count + 96);
    }
  });
}

module.exports = get_letter_interval_2;

