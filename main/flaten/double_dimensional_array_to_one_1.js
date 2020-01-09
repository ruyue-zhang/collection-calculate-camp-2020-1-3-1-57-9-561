'use strict';

function double_to_one(collection) {
  //在这里写入代码
  return flatten(collection); //TODO: 这里可以不用抽方法
}
const flatten = arr => arr.reduce((pre, val) => pre.concat(Array.isArray(val) ? flatten(val) : val), []);

module.exports = double_to_one;
