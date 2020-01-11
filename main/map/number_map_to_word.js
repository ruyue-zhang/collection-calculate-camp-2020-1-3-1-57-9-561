'use strict';

let number_map_to_word = function(collection){
  return collection.map(element => String.fromCharCode(element + 96));
};

module.exports = number_map_to_word;
