'use strict';

function rank_by_two_large_one_small(collection){
  rankAsc(collection);
  return sortByTwoLargeOneSmall(collection);
}

function rankAsc(collection) {
  collection.sort((a, b)=>{
    return a - b; //TODO: 不用写return, 如果只有一行实现
  });
}

function sortByTwoLargeOneSmall(collection) {
  var result = [];
  var len = collection.length;
  for(var i = 0; i < len; i += 3) {
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
