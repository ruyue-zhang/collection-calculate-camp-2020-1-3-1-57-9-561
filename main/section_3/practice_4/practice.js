function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a = groupingCount(collection_a);
  collection_a = objectToArrObj(collection_a);
  return createUpdatedCollection(collection_a, object_b);
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
    result.push({ key: value, count: countObject[value] });
  }
  return result;
}

function createUpdatedCollection(collection_a, object_b) {
  object_b.value.forEach(value_b => {
    collection_a.forEach(value_a => {
      if(value_a.key === value_b) {
        value_a.count -= parseInt(value_a.count / 3);
      }
    });
  });
  return collection_a;
}

module.exports = create_updated_collection;
