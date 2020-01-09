'use strict';

var map_to_four_multiples_add_one = function(collection){
  return collection.map(element=>{
    return element * 4 + 1; //TODO: 不用写return, 如果只有一行实现
  })
};

module.exports = map_to_four_multiples_add_one;
