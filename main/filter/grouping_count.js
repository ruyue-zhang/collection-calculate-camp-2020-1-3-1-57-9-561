'use strict';

function grouping_count(collection) {
  //在这里写入代码
  let object = {};
  collection.forEach(element => element in object ? object[element]++ : object[element] = 1);
  return object;
}

module.exports = grouping_count;
