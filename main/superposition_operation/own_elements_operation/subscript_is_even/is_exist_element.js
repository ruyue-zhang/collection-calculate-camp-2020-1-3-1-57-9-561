'use strict';

var is_exist_element = function(collection,element){
  return -1 !== collection.filter((currentValue, index) => !(index % 2)).indexOf(element);
};

module.exports = is_exist_element;
