'use strict';

var single_element = function(collection){
  collection = getEvenElement(collection);
  return getNoRepeatElementArray(collection);
};

function getEvenElement(collection) {
  return collection.filter((currentValue, index)=>{
    return index % 2;
  })
}

function getNoRepeatElementArray(evenElement) {
  var noRepeatElement = [];
  var len = evenElement.length;
  for(let i = 0; i < len; i++) {
    var isExist = false;
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
