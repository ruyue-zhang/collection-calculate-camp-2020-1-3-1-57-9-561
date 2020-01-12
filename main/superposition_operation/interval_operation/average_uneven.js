'use strict';

function average_uneven(collection) {
  //在这里写入代码
  let allEven = collection.filter(value => value % 2);
  return getAverage(allEven);
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
