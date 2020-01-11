'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  let average = computeAverage(collection);
  return String.fromCharCode(Math.ceil(average) + 96);
}

function computeAverage(collection) {
  return collection.reduce((total,value,index) => {
    if(index === collection.length - 1) {
      return (total + value) / collection.length;
    } else {
      return total + value;
    }
  });
}

module.exports = average_to_letter;

