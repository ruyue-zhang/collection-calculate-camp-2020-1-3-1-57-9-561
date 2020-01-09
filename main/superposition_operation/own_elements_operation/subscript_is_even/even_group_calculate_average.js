'use strict';
var even_group_calculate_average = function(collection){
  collection = getEvenElement(collection); //TODO: 尽量避免修改传入参数的值
  collection = collectAllEven(collection);
  if(collection.length) {
    let classArray = classifyByOneBits(collection);
    return computeAverage(classArray)
  } else {
    return [0];
  }
};

function getEvenElement(collection) {
  return collection.filter((currentValue, index)=>{
    return index % 2; //TODO: 不用写return, 如果只有一行实现
  })
}

function collectAllEven(collection) {
  return collection.filter(value=>{return !(value % 2)}); //TODO: 不用写return, 如果只有一行实现
}

function classifyByOneBits(collection) {
  let classArray = [];
  let oneBit = collection.filter(element=>{return element < 10}); //TODO: 同上
  let twoBit = collection.filter(element=>{return element >= 10 && element < 100});
  let threeBit = collection.filter(element=>{return element >= 100 && element < 1000});
  classArray.push(oneBit);
  classArray.push(twoBit);
  classArray.push(threeBit);
  return classArray;
}

function computeAverage(classArray) {
  let result = [];
  classArray.forEach(value=>{
    if(value.length > 0) {
      let average = value.reduce((total,currentValue,index)=>{
        if(index === value.length - 1) {
          return (total + currentValue) / value.length;
        }
        else {
          return total + currentValue;
        }
      });
      result.push(average);
    }
  }) //TODO: 少分号
  return result;
}

module.exports = even_group_calculate_average;
