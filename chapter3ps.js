//q1
let marks={
    harry:90,
    raghav:100,
    shubh:19,
    monika:4
}
for(let i=0;i<Object.keys(marks).length;i++)
{
    console.log("The marks of " + Object.keys(marks)[i]+ " are "+marks[Object.keys(marks)[i]])
}
//q2
//using for in loops 
for(let i in marks)//i will have all the keys of marks object 
    {
        console.log("The marks of " + i+ " are "+marks[i])
    }
//q3
let cnt=Number.parseInt(prompt("Enter a number "))
let i=Number.parseInt(prompt("Enter a number "))
while(i!=cnt){
    console.log("Try again ")
    i=Number.parseInt(prompt("Enter a number "))

}
console.log("Ypu have entered a correct number ")
//q4
const meanOfFive=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}