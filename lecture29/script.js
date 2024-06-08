//q1
// let age=prompt("Enter your age ")
// age=Number.parseInt(age)
// const canDrive=(age)=>{
//     if(age>=18){
//        return true
//     }
//     else{
//         return false
//     }
    
// }
// if(canDrive(age)){
//     alert("The person is eligible to Drive!")
// }
// else{
//     alert("Person cannot drive ")
// }

//q2
let age=prompt("Enter your age ")
age=Number.parseInt(age)
if(age<0){
    console.error("PLease enter the correct age ")
}
else{
let runAgain=true
const canDrive=(age)=>{
    if(age>=18){
       return true
    }
    else {
        return false
    }
    
    
}
while(runAgain){
    age=prompt("Enter your age ")
    age=Number.parseInt(age)
    if(age<0){
        console.error("PLease enter the correct age ")
        break;
    }
    
if(canDrive(age)){
    alert("The person is eligible to Drive!")
}
else{
    alert("Person cannot drive ")
}
runAgain=confirm("Do you want to play again ")
}

}

//q4
let num=prompt("Please enter a number")
num=Number.parseInt(num)
if(num>4){
    location.href="https://google.com"
}
//q5
let color=prompt("Enter the page background colour ")
document.body.style.backgroundColor=color