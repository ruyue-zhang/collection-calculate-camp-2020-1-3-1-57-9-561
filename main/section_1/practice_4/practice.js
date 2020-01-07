function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  collection_a = collection_a.filter(element_a=>{
    return object_b.value.indexOf(element_a.key) !== -1;
  });
  return collection_a.map(element=>element.key);

}

module.exports = collect_same_elements;
