'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  collection = collectAllOdd(collection);
  return multiThreeAddFiveGetTotal(collection);
}

function collectAllOdd(collection) {
  return collection.filter(value=>{return value % 2});
}

function multiThreeAddFiveGetTotal(collection) {
  return collection.reduce((total, element)=>{
    return total + element * 3 + 5;
  }, 0);
}

module.exports = hybrid_operation_to_uneven;

