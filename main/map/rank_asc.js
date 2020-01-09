'use strict';

var rank_asc = function(collection){ //TODO: var?let?const?
  return collection.sort((a,b)=>{
    return b - a; //TODO: 不用写return, 如果只有一行实现
  });
};

module.exports = rank_asc;
