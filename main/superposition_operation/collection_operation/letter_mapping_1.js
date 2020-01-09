'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  collection = collectAllEven(collection);
  return numberToLetter(collection);
}

function collectAllEven(collection) {
  return collection.filter(value=>{return !(value % 2)}); //TODO: 不用写return, 如果只有一行实现
}

function numberToLetter(collection) {
  return collection.map(element =>{
      return String.fromCharCode(element + 96); //TODO: 不用写return, 如果只有一行实现
  });
}

module.exports = even_to_letter;
