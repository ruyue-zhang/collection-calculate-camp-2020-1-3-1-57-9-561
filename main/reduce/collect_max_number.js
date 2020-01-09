'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((x,y)=>{
    return x > y ? x : y; //TODO: 不用写return, 如果只有一行实现
  });
}

module.exports = collect_max_number;
