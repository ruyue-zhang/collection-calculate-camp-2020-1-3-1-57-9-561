'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  return collection.filter(value=> {
    return value % 3 === 0; //TODO: 不用写return, 如果只有一行实现
  });
}

module.exports = choose_multiples_of_three;
