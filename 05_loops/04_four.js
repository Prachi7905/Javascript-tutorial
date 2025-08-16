// for in loop

const myObject = {
    js : "JavaScript",
    py : "Python",
    rb : "Ruby",
    cpp : "C++"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);  // for in loop to iterate over object properties    
    }


const programming = ["js", "py", "rb", "cpp"];    

for (const key in programming) {
  // console.log(programming[key]);
   
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "America")
map.set("Fr", "France")
map.set("Jp", "Japan")

for (const key in map) {
    
//console.log(key);  // no output, as Map is not iterable with for in loop
}


