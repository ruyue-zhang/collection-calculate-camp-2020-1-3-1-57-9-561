'use strict';

function rank_by_two_large_one_small(collection){
  collection.sort((a, b) => a - b);
  return sortByTwoLargeOneSmall(collection);
}

function sortByTwoLargeOneSmall(collection) {
  let result = [];
  let len = collection.length;
  for(let i = 0; i < len; i += 3) {
    if(i + 2 < len) {
      result.push(collection[i + 1]);
      result.push(collection[i + 2]);
      result.push(collection[i]);
    }
    else if(i + 1 < len){
      result.push(collection[i]);
      result.push(collection[i + 1]);
    }
    else {
      result.push(collection[i]);
    } 
  }
  return result;
}

module.exports = rank_by_two_large_one_small;
