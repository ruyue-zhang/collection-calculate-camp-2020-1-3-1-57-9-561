'use strict';
var number_map_to_word = function(collection){
  return numberToLetter(collection);
};

function numberToLetter(collection) {
  return collection.map(element =>{
      return String.fromCharCode(element + 96);
  });
}

module.exports = number_map_to_word;
