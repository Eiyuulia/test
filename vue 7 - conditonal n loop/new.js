const items = [
    {name: 'TV', price: 200 },
    {name: 'Smartphone', price: 150 },
    {name: 'Laptop', price: 500 },
    {name: 'Shoes', price: 50 },
    {name: 'Pillow', price: 25 },
    {name: 'Wifi', price: 25 }
]


// Filter Method
const expensiveItems = items.filter(item => item.price >= 100)
const midCostItems = items.filter(item => (item.price > 10 && item.price < 100))
const tes = items.filter(item => true)

// Map Method
const itemNames = items.map(item => item.name)
const itemPrices = items.map(item => item.price)

// ForEach Method
// mencari rata rata harga item
let meanItemsPrice = 0
let totalItemsPrice = 0
items.forEach(item => {
    totalItemsPrice += item.price
})
meanItemsPrice = totalItemsPrice / items.length
