// Truthy and Falsy values in JavaScript
// Falsy values: false,-0, BigInt 0n, 0, "", null, undefined, NaN
// Truthy values: All other values that are not falsy. "0", "false", [], {}, function() {}, etc.

const userEmail = "K@gmail.ai"
const userName = []

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

// if(userName.length === 0){
//     console.log("Username is empty");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty")
// }

// false == 0    // true
// false == '' // true
// 0 == '' // true
// 0 == null // false

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
//console.log(val1); // 5
val1 = null ?? 10
//console.log(val1); // 10
val1 = undefined ?? 15
//console.log(val1); // 15
val1 = null ?? 20 ?? 25
//console.log(val1); // 20

// Ternary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")
