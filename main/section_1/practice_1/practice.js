function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(element=>{
    return collection_b.indexOf(element) !== -1;  //TODO: 不用写return, 如果只有一行实现
  });
}

module.exports = collect_same_elements;
