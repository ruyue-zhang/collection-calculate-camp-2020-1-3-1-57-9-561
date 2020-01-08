function count_same_elements(collection) {
  //在这里写入代码
  let countObject = groupingCount(collection);
  return objectToArrObj(countObject);
}

function groupingCount(collection) {
  let object = {};
  collection.forEach(element => {
    if(element.length > 1) {
      let key = element.match(/[a-z]+/g).join("");
      let count = element.match(/[0-9]/g).join("");
      key in object ? object[key] += Number(count) : object[key] = Number(count);
    } else {
      element in object ? object[element]++ : object[element] = 1;
    }
  });
  return object;
}

function objectToArrObj(countObject) {
  let result = [];
  for(value in countObject) {
    result.push({ name: value, summary: countObject[value] });
  }
  return result;
}

module.exports = count_same_elements;
