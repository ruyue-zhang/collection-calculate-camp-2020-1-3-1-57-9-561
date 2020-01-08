'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  return collection.filter((element,index)=>{
    return collection.indexOf(element) === index;  
  });
}

module.exports = choose_no_repeat_number;
