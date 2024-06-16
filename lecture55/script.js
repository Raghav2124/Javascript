let p1=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
   setTimeout(() => {
    console.log("I am a promise and i am resolved")
    resolve(true)
   }, 5000);
})
let p2=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
   setTimeout(() => {
    console.log("I am a promise and i am rejected")
    reject(new Error("I am a error"))
   }, 5000);
})
//remeber we don't do console.log in p1 we do then using .then
console.log(p1)
p1.then((value)=>{
console.log(value)
})
p2.catch((error)=>{
    console.log("some error occured in p2")
})


// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise is pending")
//     setTimeout(() => {
//             // console.log("I am a promise and I am resolved")
//             resolve(true)
//     }, 5000)
// })

// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise is pending")
//     setTimeout(() => {
//             // console.log("I am a promise and I am rejected")
//             reject(new Error("I am an error"))
//     }, 5000)
// })

// To get the value
p1.then((value) => {
    console.log(value)
})

// To catch the errors
// p2.catch((error) => {
//         console.log("some error occurred in p2")
// })
// we can use then statement to catch the error in js other than catch 

p2.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log(error)
})