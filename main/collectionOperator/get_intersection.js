'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_b.filter(value=>{
    return -1 !== collection_a.indexOf(value); //TODO: 不用写return, 如果只有一行实现
  });
}

module.exports = get_intersection;
