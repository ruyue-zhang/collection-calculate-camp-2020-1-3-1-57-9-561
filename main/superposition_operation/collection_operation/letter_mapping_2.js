'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  let average = computeAverage(collection);
  return numberToLetter(Math.ceil(average));
}

function computeAverage(collection) {
  return collection.reduce((total,value,index)=>{
    if(index === collection.length - 1) {
      return (total + value) / collection.length;
    } else {
      return total + value;
    }
  });
}

function numberToLetter(average) {
  return String.fromCharCode(average + 96);
}

module.exports = average_to_letter;

