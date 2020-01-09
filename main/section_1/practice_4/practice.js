function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  collection_a = collection_a.filter(element_a=>{
    return object_b.value.indexOf(element_a.key) !== -1; //TODO: 不用写return, 如果只有一行实现
  });
  return collection_a.map(element=>element.key);
  //TODO: 可以直接链式写，因为filter的返回值也是数组。。
  // 而且一般在函数中我们不去修改输入值，会定义新的变量，因为如果这个输入值作为参数传给了其他函数，值在这个方法被修改了，不好

}

module.exports = collect_same_elements;
