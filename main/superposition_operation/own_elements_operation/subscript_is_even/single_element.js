'use strict';

var single_element = function(collection){
  let allOdd = collection.filter((currentValue, index) => index % 2);
  return getNoRepeatElementArray(allOdd);
};

function getNoRepeatElementArray(evenElement) {
  let noRepeatElement = [];
  let len = evenElement.length;
  for(let i = 0; i < len; i++) {
    let isExist = false;
    for(let j = 0; j < len; j++) {
      if(i === j) {
        continue;
      } else {
        if(evenElement[i] === evenElement[j]) {
          isExist = true;
          break;
        }
      } 
    }
    if(!isExist) {
      noRepeatElement.push(evenElement[i]);
    }
  }
  return noRepeatElement;
}

module.exports = single_element;
