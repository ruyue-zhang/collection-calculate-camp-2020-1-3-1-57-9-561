'use strict';
var number_map_to_word_over_26 = function(collection){  //TODO: var?let?const?
  return numberToLetter(collection); //TODO: 一行不用抽方法
};

function numberToLetter(collection) {
  return collection.map(element =>{
    if(element <= 26) {
      return String.fromCharCode(element + 96);
    }
    else {
      var count = Math.ceil(element / 26) - 1; //TODO: var?let?const?
      return String.fromCharCode(count + 96) + String.fromCharCode(element - 26 * count + 96);
    }
  });
}

module.exports = number_map_to_word_over_26;
