//q1
let arr=[1,2,3,4,5,6,7,8]
let a=prompt("Enter a number ?")
a=Number.parseInt(a)
arr.push(a)
console.log(a)

//q2

while(a!=0){
    arr.push(a)
    a==prompt("Enter a number ?")
    a=Number.parseInt(a)    
}

//q3    
let arr1=[1,2,3,4,5,6,7,8,10,10,100,20]
let f=arr1.filter((value)=>{
            return value%10==0
})
//q4
let s=arr1.map((value)=>{
    return value*value
})

//q5    
let n=arr.reduce((x1,x2)=>{
    return x1*x2
})