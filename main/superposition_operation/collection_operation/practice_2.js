'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  collection = collectAllOdd(collection); //TODO: 尽量避免修改传入参数的值
  return multiThreeAddTwo(collection);
}

function collectAllOdd(collection) {
  return collection.filter(value=>{return value % 2}); //TODO: 不用写return, 如果只有一行实现
}

function multiThreeAddTwo(collection) {
  return collection.map(element=>{
    return element * 3 + 2; //TODO: 不用写return, 如果只有一行实现
  });
}

module.exports = hybrid_operation_to_uneven;

