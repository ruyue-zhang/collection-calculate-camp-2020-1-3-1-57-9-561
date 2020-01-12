'use strict';
var even_group_calculate_average = function(collection){
  let allOddth = collection.filter((currentValue, index) => index % 2);
  let allOdd = allOddth.filter(value=>{return !(value % 2)});
  if(allOdd.length) {
    let classArray = classifyByOneBits(allOdd); 
    return computeAverage(classArray) 
  } else {
    return [0];
  }
};

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
  classArray.forEach(value => {
    if(value.length > 0) {
      let average = value.reduce((total,currentValue,index) => {
        if(index === value.length - 1) {
          return (total + currentValue) / value.length;
        }
        else {
          return total + currentValue;
        }
      });
      result.push(average);
    } 
  });
  return result;
}

module.exports = even_group_calculate_average;
