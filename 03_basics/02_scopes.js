// let a = 10
// const b =20
// var c = 30

// {} - scope

let a =300    // global scope
if(true){
    let a = 10  // local scope
    const b =20
    //var c = 30  not a good practice 
    //console.log("Inner : ", a) // Inner : 10

}

//console.log(a)   // 300
// console.log(b)
// console.log(c)

//Nested function - child function can access variable of parent function 
function one(){
    const username = "Kajal"

    function two(){
        const website = "youtube"
       // console.log(username)
    }
    two()
}
one()

if(true){
    const username= "Kajal"
    if(username==="Kajal"){
        const website = " youtube"
       // console.log(username + website)
    }
   // console.log(website)  // can't access child scope
}
// console.log(username); //error

//+++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++

console.log(addone(5))  //6
function addone (num) {
    return num +1
}
//addone(5)

//console.log(addTwo(5))  // throw an error  //this is called hoisting
const addTwo = function(num){
    return num +2
}
//addTwo(5)