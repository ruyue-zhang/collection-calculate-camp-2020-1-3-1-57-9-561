'use strict';
let number_map_to_word_over_26 = function(collection){
  return collection.map(element => {
    if(element <= 26) {
      return String.fromCharCode(element + 96);
    }
    else {
      let count = Math.ceil(element / 26) - 1;
      return String.fromCharCode(count + 96) + String.fromCharCode(element - 26 * count + 96);
    }
  });
};

module.exports = number_map_to_word_over_26;
