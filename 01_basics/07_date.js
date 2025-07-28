// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

let myDate = new Date()    //created an date object
console.log(myDate);    //output- 2025-07-28T14:27:36.508Z

// We can use various methods to convert this date into more readable value.
console.log(myDate.toString())    //Mon Jul 28 2025 14:31:43 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())  //Mon Jul 28 2025
console.log(myDate.toISOString())  //2025-07-28T14:34:31.308Z
console.log(myDate.toJSON())  //2025-07-28T14:34:31.308Z
console.log(myDate.toLocaleDateString()) // output 7/28/2025
console.log(myDate.toLocaleString())  //output 7/28/2025, 2:34:31 PM
console.log(myDate.toLocaleTimeString())  // 2:39:08 PM
console.log(myDate.toTimeString())  //14:39:08 GMT+0000 (Coordinated Universal Time)

console.log(typeof myDate)    //object

let myCreatedDate = new Date (2025,0,28)   //month starts from 0 in arrays
console.log(myCreatedDate)   // 2025-01-28T00:00:00.000Z
console.log(myCreatedDate.toDateString())   // Fri Jan 28 2025

let myCreatedDate1 = new Date (2025,0,28,9,18) //we can also define time 
console.log(myCreatedDate1.toLocaleString())   // 1/28/2025, 9:18:00 AM

let myCreatedDate2 = new Date ("2025-07-28")  //this is YY-MM-DD format, you can also write DD-MM-YY format
console.log(myCreatedDate2.toLocaleString())  // output 7/28/2025, 12:00:00 AM (month will start from 1)

let myTimeStamp = Date.now()
//console.log(myTimeStamp)             // 1753714925480 -values are in millisecond
//console.log(myCreatedDate.getTime()) //1738022400000 -ms
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)           //2025-07-28T16:44:28.559Z
console.log(newDate.getMonth())   // 6 (july)
console.log(newDate.getDay())   // 1 (monday)

newDate.toLocaleString('default', {
    calendar : "myDate",
    weekday : "long",
})                                      
