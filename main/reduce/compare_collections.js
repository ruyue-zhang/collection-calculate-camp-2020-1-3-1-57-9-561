'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.reduce((total,currentValue,currentIndex)=>{
    return total && (currentValue === collection_b[currentIndex])
  },true);
}

module.exports = compare_collections;


