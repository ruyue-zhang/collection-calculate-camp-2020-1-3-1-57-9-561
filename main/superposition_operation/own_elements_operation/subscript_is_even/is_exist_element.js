'use strict';
var is_exist_element = function(collection,element){
  collection = getEvenElement(collection);
  return -1 !== collection.indexOf(element);
};

function getEvenElement(collection) {
  return collection.filter((currentValue, index)=>{
    return !(index % 2);
  })
}

module.exports = is_exist_element;
