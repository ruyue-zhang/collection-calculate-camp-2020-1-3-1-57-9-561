'use strict';

function choose_even(collection) {
  //在这里写入代码
  return collection.filter(value => !(value % 2));
}

module.exports = choose_even;
