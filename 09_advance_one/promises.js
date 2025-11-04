const promiseOne = new Promise(function(resolve, reject){
    //Do an asyn task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('Promise consumed');
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("async 2 resolved");
    
})

 const promiseThree= new Promise(function(resolve, regret){
    setTimeout(function(){
        resolve({username:"xyz",email : "xyz@example.com"})
    },1000)
 })
 promiseThree.then(function(user){
console.log(user);

 })

 promiseFour= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Kajal", password:"123"})
        } else {
            reject('ERROR:Something went wrong')
        }
    },1000)
 })
promiseFour.then((user) => {
    console.log(user);
    return user.username
 }).then((username)=>{
    console.log(username);
    
 }).catch(function(error){
    console.log(error);
    
 })