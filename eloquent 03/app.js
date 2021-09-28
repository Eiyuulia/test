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

function reverseArray(arr){
    let arrR = []
    for(let i=arr.length-1; i>=0; i--){
        arrR.push(arr[i])
    }
    return arrR
}

function reverseArrayInPlace(arr){
    let arrR = []
    for(let i=arr.length-1; i>=0; i--){
        arrR.push(arr[i])
        arr.pop()
    }
    arrR.forEach(e => arr.push(e))
}

