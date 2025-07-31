const marvel_heros = ["Hindi", "english", "math"]
const dc_heros = ["Thor", "ironman", "hulk"]

//marvel_heros.push(dc_heros) //This basically pushes the complete array which roves array takes any type of the DataType

//console.log(marvel_heros);  //it will consider second array as a 4th value of array
//console.log(marvel_heros[3][1]);   //ironman

//marvel_heros.concat(dc_heros) //// we can concat the array method which add the two arrays and stores it in the new array
//console.log(marvel_heros)    // [ 'Hindi', 'english', 'math', [ 'Thor', 'ironman', 'hulk' ] ]

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros)   //[ 'Hindi', 'english', 'math', 'Thor', 'ironman', 'hulk' ]

const all_new_heros = [...marvel_heros, ...dc_heros]   //spread operator
console.log(all_new_heros)   //[ 'Hindi', 'english', 'math', 'Thor', 'ironman', 'hulk' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
/*[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] */
console.log(Array.isArray("Kajal"))   //false (not an array)
console.log(Array.from("Kajal"))  //[ 'K', 'a', 'j', 'a', 'l' ]
console.log(Array.from ({name: "Kajal"})) // []

let score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))  // [ 100, 200, 300 ]

//returns a new array from a set of element