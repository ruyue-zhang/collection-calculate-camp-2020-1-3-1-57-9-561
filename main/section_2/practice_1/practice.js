function count_same_elements(collection) {
  //在这里写入代码
  let countObject = groupingCount(collection);
  return objectToArrObj(countObject);
}

function groupingCount(collection) {
  let object = {};
  collection.forEach(element => element in object ? object[element]++ : object[element] = 1);
  return object;
}

function objectToArrObj(countObject) {
  let result = [];
  for(value in countObject) {
    result.push({
      key: value,
      count: countObject[value],
    });
  }
  return result;
}



module.exports = count_same_elements;
