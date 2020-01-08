function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  object_b.value.forEach(value_b=> {
    collection_a.forEach(value_a=> {
      if(value_a.key === value_b) {
        value_a.count -= parseInt(value_a.count / 3);
      }
    });
  });
  return collection_a;
}

module.exports = create_updated_collection;
