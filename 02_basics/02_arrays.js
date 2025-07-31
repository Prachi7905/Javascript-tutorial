const myBooks = ["Hindi", "english", "math"]
const myHeroes = ["Thor", "ironman", "hulk"]

myBooks.push(myHeroes)
console.log(myBooks);  //it will consider second array as a 4th value of array
console.log(myBooks[3][1]);   //ironman