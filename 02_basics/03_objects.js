// singleton 

//object literals

const mySym = Symbol("key1")   //symbol

const JsUser = {
    name : "Kajal",
    "Full name" : "Kajal Pandey",
    [mySym] : "mykey1",
    age: 20,
    location : "jaipur",
    email : "ksgy@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays : ["Monday", "Saturday"] 

}
console.log(JsUser.email)  //this is not a good method to access the element because in some cases i.e Full name, we won't be able to access that element
console.log(JsUser["email"])  // ksgy@gmail.com
console.log(JsUser["Full name"]) //Kajal Pandey
console.log(JsUser[mySym])

JsUser.email = "hsbu@gmail.com" //change the values
//Object.freeze(JsUser)  //no one can change value after freeze
// JsUser.email = "hbdjka@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){                  //creating a function
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){                  //creating a function
    console.log(`Hello JS user, ${this.name} `);
}

//console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo());