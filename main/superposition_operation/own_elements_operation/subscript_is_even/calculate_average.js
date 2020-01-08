'use strict';
var calculate_average = function(collection){
  collection = getEvenElement(collection);
  console.log(collection);
  return computeAverage(collection);
};

function getEvenElement(collection) {
  return collection.filter((currentValue, index)=>{
    return index % 2;
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
