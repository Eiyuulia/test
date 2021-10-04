function destroyer(arr,...destroy) {
    arr = arr.filter(e=>{
        return destroy.every(e0=>{
            return e!=e0
        })
    })
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// clear