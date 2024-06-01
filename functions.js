let a=2
let b=1
let c=3
const hello=()=>{
    console.log("Hi bro I am fine what about you?")
    return "hi"
}
function oneplus(a,b)
{
    return 1+(a+b)/2
}
const sum=(p,q)=>{
    return p+q
}
let v = hello();
console.log(v)
console.log("Average of a and b is ",oneplus(a,b))
console.log("Average of b and c is ",1+(b+c)/2)
console.log("Average of a and c is ",1+(a+c)/2)
console.log(sum(9, 7))
