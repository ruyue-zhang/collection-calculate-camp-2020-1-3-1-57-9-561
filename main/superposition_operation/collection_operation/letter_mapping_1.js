'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  return collection.filter(value => !(value % 2)).map(element => String.fromCharCode(element + 96));
}
  
module.exports = even_to_letter;
