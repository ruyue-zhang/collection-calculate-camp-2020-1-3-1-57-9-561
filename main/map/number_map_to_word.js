'use strict';
var number_map_to_word = function(collection){
  return numberToLetter(collection); //TODO: 一行不用抽方法
};

function numberToLetter(collection) {
  return collection.map(element =>{
      return String.fromCharCode(element + 96); //TODO: 不用写return, 如果只有一行实现
  });
}

module.exports = number_map_to_word;
