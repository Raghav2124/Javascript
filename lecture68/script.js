console.log(document.cookie)
document.cookie="name=raghav17"//this is just dopesn't overwrite the cookie it adds this in the already existing ones 
document.cookie="name1=raghav17334442"//this is just dopesn't overwrite the cookie it adds this in the already existing ones 
document.cookie="name=raghav1"//but in  thois the name cookie is updated 
let key=prompt("enter your key  ")
let value=prompt("enter your value ")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`//this is used because even if we pass some symbols which maybe not readable we canuse this to set out key value pair 
//this will be encoded 
//decodeURIComponent("the value which we wang to decode")
// document.cookie="name1=raghav17334442"remeber this is a set call  

console.log(document.cookie)
