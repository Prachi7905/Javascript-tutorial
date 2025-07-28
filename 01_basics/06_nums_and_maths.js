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
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.abs(4))
console.log(Math.round(4.3))