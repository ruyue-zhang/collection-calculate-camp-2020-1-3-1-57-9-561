'use strict';
var calculate_median = function(collection){
  let allOddth = collection.filter((currentValue, index) => index % 2);
  return getMedianNumber(allOddth);
};

function getMedianNumber(collection) {
  var len = collection.length;
  return  len % 2 ? collection[Math.floor(len / 2)] : (collection[len / 2] + collection[len / 2 - 1]) / 2;
}

module.exports = calculate_median;
