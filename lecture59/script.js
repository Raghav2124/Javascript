async function harry(){
let dehliweather=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("27 deg")
    }, 1000);
})
let hydweather=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("21 deg")
    }, 2000);

})
// dehliweather.then()
// hydweather.then()

//there is a alternate way we can do this  we can use await keyword  to perform the required task it waits till the function that hasn't returned the value and when it returns the value then it goes to nex line
console.log("Fetching delhi weather please wait ... ")
let dehliw=await dehliweather//this waits here till the promise is resolved
console.log("Fetched delhi weather: "+dehliw)

console.log("Fetching hyderabad weather please wait ... ")

let hyd=await hydweather
console.log("Fetched hyderabad weather: "+hyd)
return [dehliw,hyd]
}
const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}
console.log("Welcome to weather control room ")
let a=harry()
console.log(a)
const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()

}
main1()
// const harry = async () => {
//     return 7;
// };this is how you do it for arrow function
// harry().then(alert) this is similar to 
// harry().then((x)=>{
//     alert(x)
// })
//this works because we used async  and it helps us to return a promise and if we remove this we will get an error
//remeber different different async functions are executed parallely