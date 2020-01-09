'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  collection = stringToNumberArray(collection);
  arraySortAsc(collection);
  return getMedianNumber(collection);
}

function stringToNumberArray(collection) {
  return collection.split('->').map(value=>{
    return parseInt(value); //TODO: 不用写return, 如果只有一行实现
  });
}

function arraySortAsc(collection) {
  collection.sort((a,b)=>{
    return a - b; //TODO: 不用写return, 如果只有一行实现
  });
}

function getMedianNumber(collection) {
  var len = collection.length; //TODO: var?let?const?
  return  len % 2 ? collection[Math.floor(len / 2)] : (collection[len / 2] + collection[len / 2 - 1]) / 2;
}

module.exports = compute_chain_median;
