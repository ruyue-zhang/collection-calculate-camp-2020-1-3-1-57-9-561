'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  collection = collectAllOdd(collection);
  return multiThreeAddTwo(collection);
}

function collectAllOdd(collection) {
  return collection.filter(value=>{return value % 2});
}

function multiThreeAddTwo(collection) {
  return collection.map(element=>{
    return element * 3 + 2;
  });
}

module.exports = hybrid_operation_to_uneven;

