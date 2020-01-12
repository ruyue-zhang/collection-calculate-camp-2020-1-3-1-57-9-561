'use strict';

function median_to_letter(collection) {
  //在这里写入代码
  let median = getMedianNumber(collection);
  return numberToLetter(Math.ceil(median));
}

function getMedianNumber(collection) {
  let len = collection.length;
  return  len % 2 ? collection[Math.floor(len / 2)] : (collection[len / 2] + collection[len / 2 - 1]) / 2;
}

function numberToLetter(median) {
  if(median <= 26) {
    return String.fromCharCode(median + 96);
  }
  else {
    let count = Math.ceil(median / 26) - 1;
    return String.fromCharCode(count + 96) + String.fromCharCode(median - 26 * count + 96);
  }
}


module.exports = median_to_letter;
