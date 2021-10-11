function addComma(num) {
    if (num === null){
        return
    }
    return num.toString().split('').reverse().map((digit, index) => index != 0 && index % 3 == 0 ? `${digit}.` : digit).reverse().join('')
}

let ditabung = parseInt(prompt("Berapa banyak uang yg ditabung tiap tahun? "))
ditabung *= 12
let tabunganAwal = parseInt(prompt("Berapa tabungan awal?"))
let tahun = parseInt(prompt("Berapa tahun lamanya? "))
let tabunganDepo = tabunganAwal
let tabunganPolos = tabunganAwal
let bunga = 4

console.log()
console.log(`Uang yg ditabung tiap bulan: ${addComma(ditabung/12)}`)
console.log(`Lama ditabung: ${tahun} tahun`)
console.log(`Persentase bunga tiap tahun: ${bunga}%`)
console.log()

for(let i=1;i<=tahun;i++){
    tabunganDepo += ditabung
    tabunganPolos += ditabung
    tabunganDepo = tabunganDepo + (tabunganDepo * bunga/100)

    console.log()
    console.log('---------------------------------------------------------------------------------------------')
    console.log(`Di tahun ke-${i}`)
    console.log(`Tabungan Polos: ${addComma(tabunganPolos)}`)
    console.log(`Tabungan Deposito: ${addComma(Math.floor(tabunganDepo))}`)
    console.log(`Pendapatan per tahun jika pensiun di tahun ini: ${addComma(Math.floor(tabunganDepo*4/100))}`)
    console.log(`Pendapatan per bulan jika pensiun di tahun ini: ${addComma(Math.floor(tabunganDepo*4/100/12))}`)
    console.log('---------------------------------------------------------------------------------------------')
    console.log()
}
