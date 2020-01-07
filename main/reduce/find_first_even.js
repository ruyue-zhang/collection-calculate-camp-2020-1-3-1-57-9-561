'use strict';

function find_first_even(collection) {
  //在这里写入代码
  collection = chooseEven(collection);
  return collection[0];
}

function chooseEven(collection) {
  return collection.filter(value=> {
    return value % 2 === 0;
  });
}

module.exports = find_first_even;

