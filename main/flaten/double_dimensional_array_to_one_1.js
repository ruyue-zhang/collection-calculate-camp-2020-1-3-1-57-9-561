'use strict';

function double_to_one(collection) {
  //在这里写入代码
  const flatten = arr => arr.reduce((pre, val) => pre.concat(Array.isArray(val) ? flatten(val) : val), []);
  return flatten(collection);
}

module.exports = double_to_one;
