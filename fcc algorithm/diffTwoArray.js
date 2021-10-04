function diffArray(arr1, arr2) {
    var newArr = [];
  
    arr1.forEach(e=>{
      if(!arr2.some(e0=>e==e0)){
        console.log('first for each: '+ e)
        newArr.push(e)
      }
    })
  
    arr2.forEach(e=>{
      if(!arr1.some(e0=>e==e0)){
          console.log('second for each: ' + e)
        newArr.push(e)
      }
    })
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  // clear