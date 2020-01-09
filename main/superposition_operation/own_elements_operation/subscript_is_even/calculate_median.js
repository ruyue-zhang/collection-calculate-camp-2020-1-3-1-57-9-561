'use strict';
var calculate_median = function(collection){
  collection = getEvenElement(collection);
  return getMedianNumber(collection);
};

function getEvenElement(collection) {
  return collection.filter((currentValue, index)=>{
    return index % 2; //TODO: 不用写return, 如果只有一行实现
  })
}

function getMedianNumber(collection) {
  var len = collection.length;
  return  len % 2 ? collection[Math.floor(len / 2)] : (collection[len / 2] + collection[len / 2 - 1]) / 2;
}

module.exports = calculate_median;
