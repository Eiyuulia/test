
// Function Side
function isEmpty(objek){
    let truekah = false;
    for (let key in objek){
        truekah = key in objek;
        if(truekah === true){
            return false
        }
    }
    return true;
}

function sumValue(objek){
    let total = 0;
    for (let key in objek){
        total += objek[key];
    }
    return total;
}

function multiplyNum(obj){
    for (let key in obj){
        if (typeof(obj[key] == "number")){
            obj[key] *= 2;
        } else{
            continue;
        }
    }
}


// Object Side
let name1 = {
    name: "asso",
    age: "20",
};

let name2 = {};

let companyA = {
    sony: 500000,
    ampi: 1000000,
};

let numA = {
    a: 200,
    b: 300,
}


// Game Side
console.log(sumValue(numA));
multiplyNum(numA);
console.log(sumValue(numA));

