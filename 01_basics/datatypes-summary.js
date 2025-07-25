// Primitive
// 7 types : Number, string, boolean, null, undefined, symbol, bigint

const score = 100; // Number
const scoreValue = 100.3

const isLoggedIn = false // Boolean
const outsideTemp = null  //Null
let userEmail; // Undefined

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123'); 
console.log(id === anotherId); //false, symbols are unique

const bigNumber = 1376692961494146849n; // BigInt   

// Reference (non-primitive)
// Array, Object, Function

const heros = ['Shaktiman', 'Baalveer', 'Naagraj']; // Array

let myObj = {
    name: 'Prachi',
    age: 21
}                      // Object


const myFunction = function() {
    console.log("Hello world");
}                              // Function

// to check the type of a variable , we use typeof operator
console.log(typeof bigNumber);
console.log(typeof myFunction); //the type of function is object function
console.log(typeof myObj);  //the type of object is object
console.log(typeof heros);  //the type of array is object

//**************************************************************************************************/

//   Stack(Primitive),     Heap(Non-Primitive)

let myName = "Prachi"
let anotherName = myName
anotherName = "Pooja"
console.log(myName); // "Prachi"
console.log(anotherName); // "Pooja" because primitive values are stored in stack memory and copied by value


let userOne = {
    email : "xyz@gmail.com",
    userId: "1234"
}
let userTwo = userOne;
userTwo.email = "ytz@gmail.com"

console.log(userOne.email); // because non-primitive values are stored in heap memory and copied by reference
console.log(userTwo.email); // both userOne and userTwo point to the same object in memory
