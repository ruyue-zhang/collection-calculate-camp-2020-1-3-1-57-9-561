'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce((total,value,index)=>{
    if(index === collection.length - 1) {
      return (total + value) / collection.length;
    }
    else {
      return total + value;
    }
  });
}

module.exports = compute_average;

