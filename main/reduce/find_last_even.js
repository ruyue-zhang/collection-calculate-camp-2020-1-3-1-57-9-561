'use strict';

function find_last_even(collection) {
  //在这里写入代码
  collection = chooseEven(collection);
  return collection[collection.length - 1];
}

function chooseEven(collection) {
  return collection.filter(value=> {
    return value % 2 === 0; //TODO: 不用写return, 如果只有一行实现
  });
}

module.exports = find_last_even;
