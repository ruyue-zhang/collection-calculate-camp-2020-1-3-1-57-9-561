'use strict';

function double_to_one(collection) {
  //在这里写入代码
  let result = flatten(collection);
  return chooseNoRepeatNumber(result);
}

const flatten = arr => arr.reduce((pre, val) => pre.concat(Array.isArray(val) ? flatten(val) : val), []);

function chooseNoRepeatNumber(collection) {
  return collection.filter((element,index)=>{
    return collection.indexOf(element) === index; //TODO: 不用写return, 如果只有一行实现
  });
}

module.exports = double_to_one;
