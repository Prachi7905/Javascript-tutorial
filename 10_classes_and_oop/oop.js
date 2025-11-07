const user = {
    username : "kajal",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        console.log("Got user details from DB");
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());

