// Immediately Invoked Function Expression

// function chai(){
//     console.log('DB CONNECTED')
// }
// chai()                       // DB CONNECTED

(function chai(){
    console.log(`DB CONNECTED`)
})();  //  To write two or multiple IIFE one should be end with semicolon ;

// ()()  
// IIFE is a function which immediately executes after it's creation . 
// It is wriiten as one parentheses for wrapping the function and other for execution ()();

( function aurcode (){     // This is named IIFE
console.log(`DB CONNECTED TWO`)

} )();

// ( ()=> {
// console.log(`DB CONNECTED THREE`)
// } 
// )();

// for variables
( (name)=> {            // This is simple IIFE
console.log(`DB CONNECTED FOUR  ${name}`)

} )('Kajal')