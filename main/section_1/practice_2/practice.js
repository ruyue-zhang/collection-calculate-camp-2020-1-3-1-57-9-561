function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(element_a=>{
    let isTrue = false;
    collection_b.forEach(element_b=>{
      if(element_b.indexOf(element_a) !== -1) {
        isTrue = true;
      }  
    });
    return isTrue;
  });
}

module.exports = collect_same_elements;
