//Number conversion

//let score = 33;
//let score = "33"
//let score = "33abc"
//let score = null;
//let score = undefined;
//let score = true;
//let score = "33.5"; // String with decimal
let score = "Prachi";
console.log(score);

console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* Notes :
"33" easily converts to 33 
"33abc" => NaN 
true => 1   / False => 0
null => 0   
undefined => NaN    
Prachi => NaN
*/

// Boolean conversion

//let isLoggedIn = "Prachi";
let isLoggedIn = 1
//let isLoggedIn = ""
//let isLoggedIn = null;
//let isLoggedIn = undefined;
//et isLoggedIn = NaN;


let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/* Notes :
"Prachi" => true
1 => true
"" => false
0 => false
null => false
undefined => false
NaN => false
*/

// String conversion

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);