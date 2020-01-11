'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  collection = stringToNumberArray(collection);
  arraySortAsc(collection);
  return getMedianNumber(collection);
}

function stringToNumberArray(collection) {
  return collection.split('->').map(value => parseInt(value));
}

function arraySortAsc(collection) {
  collection.sort((a,b) => a - b);
}

function getMedianNumber(collection) {
  let len = collection.length;
  return  len % 2 ? collection[Math.floor(len / 2)] : (collection[len / 2] + collection[len / 2 - 1]) / 2;
}

module.exports = compute_chain_median;
