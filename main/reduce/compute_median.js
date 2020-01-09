'use strict';

function compute_median(collection) {
  //在这里写入代码
  arraySortAsc(collection);
  return getMedianNumber(collection);
}

function arraySortAsc(collection) {
  collection.sort((a,b)=>{
    return a - b; //TODO: 不用写return, 如果只有一行实现
  });
}

function getMedianNumber(collection) {
  var len = collection.length;
  return  len % 2 ? collection[Math.floor(len / 2)] : (collection[len / 2] + collection[len / 2 - 1]) / 2;
}

module.exports = compute_median;


