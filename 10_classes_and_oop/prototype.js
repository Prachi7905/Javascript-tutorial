// let myName = "kajal   "
// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
      //  console.log(`Spidy power is ${this.spiderman}`);
        
    }

}
Object.prototype.kajal = function(){
    //console.log(`kajal is present in all objects`);
    
}

Array.prototype.heyKajal = function(){
    //console.log(`Kajal says hello`);
    
}
//heroPower.kajal()
// myHeros.kajal()
// myHeros.heyKajal()
//heroPower.heyKajal()

//inheritance

const User ={
    name : "chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername ="chaiAurCode"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);
    
    
}
anotherUsername.trueLength()
"Kajal".trueLength()
"iceTea".trueLength()