// Reduce

const myNum = [1,2,3,4]

// const myTotal = myNum.reduce(function(acc, cvalue){
//     console.log(`acc : ${acc} and cvalue : ${cvalue}`);
    
//     return acc + cvalue
// }, 0)

//console.log(myTotal);  // 10

const myTotal = myNum.reduce( (acc, curr) => acc +curr, 0)
//console.log(myTotal);  // 10

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 7999
    },
    {
        itemName : "py course",
        price : 1999
    },
]
const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price, 0)
console.log(priceToPay);  // 18996

