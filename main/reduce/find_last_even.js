'use strict';

function find_last_even(collection) {
  //在这里写入代码
  collection = collection.filter(value => !(value % 2));
  return collection.pop();
}

module.exports = find_last_even;
