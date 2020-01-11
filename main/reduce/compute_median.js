'use strict';

function compute_median(collection) {
  //在这里写入代码
  collection.sort((a,b) => a - b);
  return getMedianNumber(collection);
}

function getMedianNumber(collection) {
  let len = collection.length;
  return  len % 2 ? collection[Math.floor(len / 2)] : (collection[len / 2] + collection[len / 2 - 1]) / 2;
}

module.exports = compute_median;


