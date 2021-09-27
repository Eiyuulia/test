function so(){
    return (Math.round(Math.random() * 10))
}


function range(start, end, step = 1){
    let arr = []

    if (start < end){
        for(let i = start; i<=end;i += step){
            arr.push(i)
        }
    } else{
        for(let i = start; i>=end;i -= step){
            arr.push(i)
        }
    }
    return arr
}

function sum(arr){
    let total = 0;
    arr.forEach(e => total+=e)
    return total
}