'use strict';
var even_group_calculate_average = function(collection){
  collection = getEvenElement(collection);
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
    return index % 2;
  })
}

function collectAllEven(collection) {
  return collection.filter(value=>{return !(value % 2)});
}

function classifyByOneBits(collection) {
  let classArray = [];
  let oneBit = collection.filter(element=>{return element < 10});
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
  }) 
  return result;
}

module.exports = even_group_calculate_average;
