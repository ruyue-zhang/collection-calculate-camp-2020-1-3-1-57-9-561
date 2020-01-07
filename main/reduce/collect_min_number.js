'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce((x,y)=>{
    return x < y ? x : y;
  });
}

module.exports = collect_min_number;

