'use strict';

function hybrid_operation(collection) {
  //在这里写入代码
  return collection.reduce((total, currentValue)=>{
    return total + currentValue * 3 + 2; //TODO: 不用写return, 如果只有一行实现
  } ,0);

}

module.exports = hybrid_operation;

