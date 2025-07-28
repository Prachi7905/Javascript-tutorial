const score = 400  //javascript by default consider this as number but sometimes we want to explicitly define the value as number
console.log(score)
const balance = new Number(100)   //defined in a new Number which is object type
console.log(balance);

console.log(balance.toString());  //100 - a string
console.log(balance.toString().length);  //return the length of number 3
console.log(balance.toFixed(2));  //it will return output upto two decimal number 100.00

const otherNumber = 27.556
console.log(otherNumber.toPrecision(3))  //output 27.6
// const otherNumber1 = 127.683
// console.log(otherNumber1.toPrecision(3))  //output 128
// const otherNumber2= 2324.5385
// console.log(otherNumber2.toPrecision(3))  //output 2.32e+3  exponential value 

const hundreds= 1000000;
console.log(hundreds.toLocaleString())    //output 1,000,000 bydefault it converts in international number system
console.log(hundreds.toLocaleString('en-IN'))  //gives output in indian number system 10,00,000

/*******************************************Maths**************************************************/
//console.log(Math)
console.log(Math.abs(-4))   //Converts +ve / -ve integer values to positive -output 4
console.log(Math.abs(4))     //output 4
console.log(Math.round(4.3))    //output 4
console.log(Math.round(4.6))   // round off the value and gives output 5
console.log(Math.ceil(4.2))    //gives top value ,makes 4.2 as 5
console.log(Math.floor(4.7))    //gives lower value , makes 4.7 as 4
console.log(Math.min(3,4,2,5,1,6))   //output 1

console.log(Math.random());    //it gives random values between 0 and 1
console.log(Math.random()*10)   //it will move the decimal point and gives output b/w 1 to 10
console.log(Math.random()*10 +1)  // This assures that values are atleast 1 & more than 1
console.log((Math.random()*10) +1)  //To avoid any BODMAS rule miscalculation

//---- Trick to randomize value between range ----
const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1)) + min))
