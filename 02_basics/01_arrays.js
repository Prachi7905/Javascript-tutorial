//Arrays

/*Array is written in brackets [  ].
Array data type is an object.
Array can contain different data types . i.e string,number,boolean,array etc.
Array is zero based indexing. It starts with zero.
Once changed its original value will also change beacause it is non primitive (refrence) type.*/

const myArr = [0,1,4,6,7]             
console.log(myArr[1])   //output 1

const myHeros = ["shaktiman", "naagraj"]   
const myArr2 = new Array(1,3,4,2,6)
console.log(myArr2[3])     //2
console.log(myHeros[1])     //naagraj

//Array Methods

myArr.push(6)   //add the value at the end
console.log(myArr);   // [ 0, 1, 4, 6, 7, 6 ]
myArr.pop()           //remove the value from the last
console.log(myArr)    // [ 0, 1, 4, 6, 7 ]
myArr.unshift(8)      //adds value at first of an array.
console.log(myArr)   // [ 8, 0, 1, 4, 6, 7 ]
myArr.shift()         //removes first value of an array.
console.log(myArr)   // [ 0, 1, 4, 6, 7 ]

console.log(myArr.includes(5));  //checks true or false. output- false
console.log(myArr.indexOf(4)) ;  // checks the position of value in number form. output-2

const newArr = myArr.join()   //converts to string.
console.log(newArr)    // 0,1,4,6,7

//Slice , Splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)  // returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
console.log(myn1)
console.log("B", myArr);
const myn2 = myArr.splice(1,3)  //returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
console.log("C", myArr);
console.log(myn2)
