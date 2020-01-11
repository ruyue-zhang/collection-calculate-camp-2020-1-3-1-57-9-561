'use strict';

function find_first_even(collection) {
  //在这里写入代码
  collection = collection.filter(value => !(value % 2));
  return collection[0];
}

module.exports = find_first_even;

