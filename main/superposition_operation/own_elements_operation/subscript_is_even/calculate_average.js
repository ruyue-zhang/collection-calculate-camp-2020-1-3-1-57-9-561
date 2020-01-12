'use strict';
var calculate_average = function(collection){
  let allEvneth = collection.filter((currentValue, index) => index % 2);
  return computeAverage(allEvneth);
};

function computeAverage(collection) {
  return collection.reduce((total,value,index)=>{
    if(index === collection.length - 1) {
      return (total + value) / collection.length;
    }
    else {
      return total + value;
    }
  });
}

module.exports = calculate_average;
