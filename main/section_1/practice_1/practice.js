function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(element => collection_b.indexOf(element) !== -1); 
}

module.exports = collect_same_elements;
