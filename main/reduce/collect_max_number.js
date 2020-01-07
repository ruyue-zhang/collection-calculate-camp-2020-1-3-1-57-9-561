'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((x,y)=>{
    return x > y ? x : y;
  });
}

module.exports = collect_max_number;
