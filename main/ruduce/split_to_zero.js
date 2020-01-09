'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [number]; //TODO: var?let?const?
  while (number  > 0) {
    number = Math.round((number - interval) * 10) / 10;
    result.push(number);
  }
  return result;
}

module.exports = spilt_to_zero;
