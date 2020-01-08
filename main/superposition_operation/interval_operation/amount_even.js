'use strict';

function amount_even(collection) {
  //在这里写入代码
  collection = collectAllEven(collection);
  return getArrayTotal(collection);
}

function collectAllEven(collection) {
  return collection.filter(value=>{return !(value % 2)});
}

function getArrayTotal(collection) {
  return collection.reduce((total, value)=>{
    return total + value;
  }, 0);
}

module.exports = amount_even;
