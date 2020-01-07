'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(element_a=>{
    let isTrue = false;
    collection_b.forEach(element_b=>{
      if(0 === element_a % element_b) {
        isTrue = true;
      }
    });
    return isTrue;
  });
}

module.exports = choose_divisible_integer;
