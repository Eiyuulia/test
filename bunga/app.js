// let ditabung = Number(prompt('Berapa yg ditabung?'))
// let lama = 10 
// let bungaDepostito = 5
// let tabungan = 0

// console.log(`bulan 0 = ${tabungan}`)
// for(let i=0;i<lama*12;i++){
//     tabungan += ditabung
//     console.log(`bulan ${i+1} belum bunga = ${tabungan.toFixed(3)}`)
//     tabungan = tabungan + (tabungan * bungaDepostito / 100)
//     console.log(`bulan ${i+1} sudah bunga = ${tabungan.toFixed(3)}`)
// }

// tabungan = Math.floor(tabungan)

// // tabungan = Math.floor(tabungan)
// // let tabunganStr = toString(tabungan)
// // let tabunganArr = tabunganStr.split('')
// // tabunganArr = tabunganArr.reverse()
// // tabunganStr = ''
// // for (let i=0; i<tabunganArr.length;i++){
// //     tabunganArr.splice(i,0,'.')
// // }
// // tabunganArr = tabunganArr.reverse()
// console.log(`\nTotal tabungan deposito setelah ${lama*12} bulan = ${tabungan}`)

function addComma(num) {
    if (num === null){
        return
    }
    return num.toString().split('').reverse().map((digit, index) => index != 0 && index % 3 == 0 ? `${digit}.` : digit).reverse().join('')
}

let ditabung =  Number(prompt('Berapa yg ditabung?'))
let lamaTahun = 10
let lamaBulan = lamaTahun * 12
let bungaDeposito = 3.5
let bungaSahamNormal = 5
let bungaSahamTinggi = 10
let tabunganNormal = 0
let tabunganDeposito = 0
let tabunganSahamNormal = 0
let tabunganSahamTinggi = 0

for (let i=0;i<lamaBulan;i++){
    // tabungan ditambah setiap bulan
    tabunganNormal += ditabung
    tabunganDeposito += ditabung
    tabunganSahamNormal += ditabung
    tabunganSahamTinggi += ditabung

    // tabungan ditambah dengan efek bunga
    tabunganDeposito = tabunganDeposito + (tabunganDeposito * bungaDeposito / 100)
    tabunganSahamNormal = tabunganSahamNormal + (tabunganSahamNormal * bungaSahamNormal / 100)
    tabunganSahamTinggi = tabunganSahamTinggi + (tabunganSahamTinggi * bungaSahamTinggi / 100)

    // tabungan di log setiap tahun
    if ((i+1) % 12 == 0){
        let tNstr = addComma(Math.floor(tabunganNormal))
        let tDstr = addComma(Math.floor(tabunganDeposito))
        let tSN = addComma(Math.floor(tabunganSahamNormal))
        let tST = addComma(Math.floor(tabunganSahamTinggi))
        
        console.log('-------------------------------------------------------------------------------------')
        console.log(`tabungan normal di tahun ${(i+1)/12} = ${tNstr}`)
        console.log(`tabungan deposito di tahun ${(i+1)/12} = ${tDstr}`)
        console.log(`tabungan saham bunga 5% di tahun ${(i+1)/12} = ${tSN}`)
        console.log(`tabungan saham bunga 10% di tahun ${(i+1)/12} = ${tST}`)
        console.log('-------------------------------------------------------------------------------------')
        console.log(' ')
    }
}