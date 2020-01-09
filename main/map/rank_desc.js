'use strict';

var rank_desc = function(collection){ //TODO: var?let?const?
  return collection.sort((a,b)=>{
    return a - b; //TODO: 不用写return, 如果只有一行实现
  });
};

module.exports = rank_desc;
