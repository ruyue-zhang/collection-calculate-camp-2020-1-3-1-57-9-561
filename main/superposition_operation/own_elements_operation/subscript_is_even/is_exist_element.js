'use strict';

var is_exist_element = function(collection,element){
  collection = getEvenElement(collection);
  return -1 !== collection.indexOf(element);
};

function getEvenElement(collection) {
  return collection.filter((currentValue, index)=>{
    return !(index % 2); //TODO: 不用写return, 如果只有一行实现
  })
}

module.exports = is_exist_element;
