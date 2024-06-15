//settimeout is used when we want to execute our javascript after some interval of time 
//setinterval it is used when we want to execute our javascript again and again after a set interval of time 
alert("hello")
const sum=(a,b)=>{
    console.log("Yes I am running " +(a+b))
}
// setInterval(function() {
//   alert("setinterval")
// }, 3000)

setTimeout(sum,5000,1,2);// here 1 and 2 are arguments which we pass and it returns timmer id 
let a=setTimeout(function (){
alert("Hi i am within settimeout")
},2000)// here 2000 is in milisecond and it is equivalent to 2 seconds 
//in console 1 will be displayed and it tells us that it is a timer id 
let b=prompt("Do you want to clear settimeout(y/n)")
if("n"==b){
clearTimeout(a)
}//this will stop the execution of teh above timeout and this will not show any result after 2 seconds
console.log(a)
//setinterval has a similar syntax to settimeout but it is execucted again and again after the specified time 