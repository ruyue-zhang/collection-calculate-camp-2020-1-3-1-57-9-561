'use strict';

function amount_even(collection) {
  //在这里写入代码
  return collection.filter(value => !(value % 2)).reduce((total, value) => total + value, 0);
}

module.exports = amount_even;
