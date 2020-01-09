'use strict';
var calculate_average = function(collection){
  collection = getEvenElement(collection);
  return computeAverage(collection);
};

function getEvenElement(collection) {
  return collection.filter((currentValue, index)=>{
    return index % 2; //TODO: 不用写return, 如果只有一行实现
  })
}

function computeAverage(collection) {
  return collection.reduce((total,value,index)=>{
    if(index === collection.length - 1) {
      return (total + value) / collection.length;
    }
    else {
      return total + value;
    }
  });
}

module.exports = calculate_average;
