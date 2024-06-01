//q1
let a=prompt("Enter the age of person ? ")
a=Number.parseInt(a)
if(age>=10&&age<=20){
    alert("person is in the given age limit  ")
}
else{
    console.log("age is not in the given limits ")
}
//q2
let name=prompt("Enter the name of person : ")
switch(name)
{
    case "Raghav":
        console.log("That my guy")
        break
    case "Tushar":
        console.log("My friend")
        break 
    case "Kanav":
        console.log("Frieeend")
        break
    default:
        console.log("YO YO")    
}
//q3
let b=prompt("Enter the number: ")
b=number.parseInt(b)
if(b%2==0&&b%3==0){
    console.log("the number is divisible by both 2 and 3")
}
else{
    console.log("the number is not divisble by both the numbers")
}
//q4
let c=prompt("Enter the number: ")
c=number.parseInt(c)
if(c%2==0||c%3==0){
    console.log("the number is divisible by both 2 or  3")
}
else{
    console.log("the number is not divisble by numbers")
}
//q5
let d=prompt("Enter the age of driver: ")
d=number.parseInt(d)
if(d>18){
    console.log("the person is able to drive")
}
else{
    console.log("the person cannot drive")
}
let e=d>18?"You can drive":"You cannot drive"
console.log(e)


