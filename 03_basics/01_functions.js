function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("L");
}
//sayMyName()   // this is function call

// function addTwoNumbers(number1, number2){  // passed value is parameters
// console.log(number1+number2);
// }
// addTwoNumbers(3,4);   // we have passed argument 

// function addTwoNumbers(number1, number2){  // passed value is parameters
// console.log(number1+number2);
// }
// const result = addTwoNumbers(3,4);   
// console.log("Result: " , result)    // undefined     because return is not same as console.log


function addTwoNumbers(number1, number2){  // passed value is parameters
// let result = number1 + number2
// return result
//console.log("Kajal")  //after return, it will never excecute this line
return number1 + number2
}
const result = addTwoNumbers(3,4);   
//console.log("Result: " , result)   // Return : 7

function loginUserMessage(username){   //username= "sam", the value will never be undefined
    if(!username){    // username===undefined
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Kajal")) 
console.log(loginUserMessage())  //  //if we did not pass an argument, output will be undefined