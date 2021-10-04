function whatIsInAName(collection, source) {
    var arr = [];
    source = clear(source)
    // Only change code below this line

    whatIsInAName.forEach(obj=>{
        obj=clear(obj)
        obj.forEach(obj0=>{
            
        })
    })
  
  
    // Only change code above this line
    return arr;
  }

function clear(obj){
    obj = JSON.stringify(obj).split('')
    let arr = []
    for(let i=0;i<obj.length;i++){
        if(obj[i] != '{' && obj[i] != '}' && obj[i] != '"'){
            arr.push(obj[i])
        }
    }

    arr = arr.join('').split(',')
    return arr
}
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  console.log(clear())