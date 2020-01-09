'use strict';

function choose_even(collection) {
  //在这里写入代码
  return collection.filter(value=> {
    return value % 2 === 0; //TODO: 不用写return, 如果只有一行实现
  });
}

module.exports = choose_even;
