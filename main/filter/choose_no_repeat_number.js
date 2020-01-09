'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  return collection.filter((element,index)=>{
    return collection.indexOf(element) === index; //TODO: 不用写return, 如果只有一行实现
  });
}

module.exports = choose_no_repeat_number;
