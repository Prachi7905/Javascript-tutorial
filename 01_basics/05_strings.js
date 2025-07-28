
const name ="Kajal"
const repoCount = 50
//console.log(name + repoCount+ "Value");  //old way

//In modern JS , we will use string interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//string declaration
const gameName = new String ('Kajal-xyz-fr')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length); // we can directly use other methods like this
console.log(gameName.toUpperCase());  //original value does not change (heap and stack concept)
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4);  //substrings does not allow negavtive values
console.log(newString);

const anotherString = gameName.slice(-3,3);  //slice also takes negative value
console.log(anotherString);

const newStringOne = "   Kajal   "
console.log(newStringOne);
console.log(newStringOne.trim());      //trim removes unwanted spaces

const url = "https://Kajal.com/Kajal%20Pandey"
console.log(url.replace('%20', '-'));  //it replace %20 to -

console.log(url.includes('Kajal'));  //we can also ask questions , is 'kajal' string present in the url?

console.log(gameName.split('-'));  //split can break the strings into array based on space or dash