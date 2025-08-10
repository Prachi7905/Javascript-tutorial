// This keyword refers to the current context
const user = {
    username : "Kajal",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()  // this will print sam because of this keyword because it refers current context

//console.log(this)

// function chai(){
//     let username = "Kajal"
//     console.log(this.username)  // undefined     in function
// }
// chai ()


// const chai = function (){
//     let username = "Kajal"
//     console.log(this.username)  // undefined
// }
// chai ()

// Arrow function
// const chai = ()=> {
//     let username = "Kajal"
//     console.log(this.username)  
//  }
// chai ()


// const addTwo= (num1, num2)=> {
//     return num1 + num2 
// }
// console.log(addTwo(3,4))   // 7

// Implicit return

//const addTwo= (num1, num2)=>num1 + num2 
//const addTwo= (num1, num2)=>(num1 + num2)   // mostly used in react
//console.log(addTwo(3,4)) // 7

// how to add objects in implicit return

const addTwo=(num1, num2) => ({username :"Kajal"})
console.log(addTwo(5,8))  // { username: 'Kajal' }

