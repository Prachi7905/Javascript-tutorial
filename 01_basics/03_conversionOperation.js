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

//********************************** Operations **********************************************

let value =3
let negValue = -value;
console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2/2);
//console.log(2**2); // Exponentiation
//console.log(2%2); // Modulus

let str1= "hello"
let str2= " Prachi"
let str3 = str1 + str2
console.log(str3);
 
//console.log (1 + "2");
//console.log("1" + 2 );
//console.log("1"+ 2 + 2);
//console.log(1 + 2 + "2");
//console.log((1+2) * 9 % 2); //use parenthesis to control order of operations 

console.log(+true);
//console.log(true+);   //this will give an error
let num1, num2, num3
num1=num2=num3= 2+2

let gameCounter =100
++gameCounter; // Increment operator
console.log(gameCounter);


