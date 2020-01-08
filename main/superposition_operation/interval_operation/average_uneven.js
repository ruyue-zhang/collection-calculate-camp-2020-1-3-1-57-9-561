'use strict';

function average_uneven(collection) {
  //在这里写入代码
  collection = collectAllOdd(collection);
  return getAverage(collection);
}

function collectAllOdd(collection) {
  return collection.filter(value=>{return value % 2});
}

function getAverage(collection) {
  return collection.reduce((total, value, index)=>{
    if(index === collection.length - 1) {
      return (total + value) / collection.length;
    }
    else {
      return total + value;
    }
  });
}

module.exports = average_uneven;
