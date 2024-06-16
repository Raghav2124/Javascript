let promise=new Promise(function(resolve,reject){
    alert("hello")
    resolve(56)
})

console.log("Hello world! ")
setTimeout(() => {
    console.log("hello after 2 seconds")
}, 2000);
console.log("My name is "+ "John")
console.log(promise)
//fetch  google.com homepage ==> console.log("google.com homepage done")
//fetch data from data api
//fetch pictures from server 
//Print downloading
//rest of the script 
//first 3 can be done parallel execution 