// singleton 

//object literals

const JsUser = {
    name : "Kajal",
    "Full name" : "Kajal Pandey",
    age: 20,
    location : "jaipur",
    email : "ksgy@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays : ["Monday", "Saturday"] 

}
console.log(JsUser.email)  //this is not a good method to access the element because in some cases i.e Full name, we won't be able to access that element
console.log(JsUser["email"])  // ksgy@gmail.com
console.log(JsUser["Full name"]) //Kajal Pandey