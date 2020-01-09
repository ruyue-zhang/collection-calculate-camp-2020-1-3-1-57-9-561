'use strict';

function amount_even(collection) {
  //在这里写入代码
  collection = collectAllEven(collection); //TODO: 尽量避免修改传入参数的值
  return getArrayTotal(collection);
}

function collectAllEven(collection) {
  return collection.filter(value=>{return !(value % 2)}); //TODO: 不用写return, 如果只有一行实现
}

function getArrayTotal(collection) {
  return collection.reduce((total, value)=>{
    return total + value; //TODO: 不用写return, 如果只有一行实现
  }, 0);
}

module.exports = amount_even;
