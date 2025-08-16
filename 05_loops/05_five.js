// for each loop

const coding = ["js", "python", "ruby", "cpp"];

//coding.forEach(function (val) {
// console.log(val);
// })

//coding.forEach( (item) => {  // arrow function
//     console.log(item);
    
//})


// passing function as a callback
// function printMe(item){
//     console.log(item);  
// }
// coding.forEach(printMe);  

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

// {}, {}, {} 

const myCoding=[
{
    languageName : "Javascript",
    languageFileName : "js"
},
{
    languageName : "Java",
    languageFileName : "java"
},
{
    languageName : "python",
    languageFileName : "py"
},
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})

