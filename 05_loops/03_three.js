// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
    
}

const greetings = "Hello world"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
    
}

// Maps - unique keys and values
const map = new Map()
map.set("IN", "India")
map.set("USA", "America")
map.set("Fr", "France")
map.set("Jp", "Japan")
//console.log(map);

for (const [key, value] of map) {   // for of loop
   // console.log(key,':-', value);   
}


const myObject = {   // for of loop will not work for the iteration of objects 
    'game': "NFS",
    'game2' : 'spiderman'
}
// for (const [key,value] of myObject) {
//     console.log(key,':-', value);   
// }
