//basics of arrays 
let marks_class_12=[91,23,45,67,false,null,"Not present"]//we can put multiple types of values in array 
console.log(marks_class_12)
marks_class_12[6]=89// this is possible to change the existing values as the are mutable
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
//udefined is displayed when we try to access that type of value which is not defined 
console.log("the length of marks of calll 12 students are as ",marks_class_12.length)//used to get the length of an array 
console.log(typeof(marks_class_12))//this will give us an object
console.log(typeof marks_class_12)
// array methods 
let num=[1,2,34,4]
let b=num.toString()//this will convert the array to sting and b is a string
console.log(b)
let c=num.join("_")//this will return a string 
console.log(c)
num.pop()
console.log(num)//this make changes in the same array and it also returns the element which is popped if we store it some where
let d=num.push(90)
console.log(num,d)//this will make changes in the original array 
let r=num.shift()//this will shift the first element and pop it and also make changes in the same array 
console.log(r,num)
let e=num.unshift(78)
console.log(e,num)//this will add  a new  in beginingelement and  make changes in the same array 
let arr=[1,2,3,4,5,6,7,8,9]
console.log(arr.length)
delete arr[0]
console.log(arr.length)
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// sort method
// let compare = (a, b)=>{
//   return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
let newNum = num1.slice(3, 5)
console.log(newNum)
// for loop 
for(let i=0;i<num.length;i++)
    {
        console.log(num[i])
    }
//forEach loop 
num.forEach((elemet)=>
{
    console.log(elemet*elemet)
})//this is used to do some operations on existing elements of an array and it doesn't reaturn a new array 

//array.from
let nam="raghav"
let ar=Array.from(nam)
 //for of 
 for (let item of num)
    {
        console.log(item)
    }
//this will act as a normal for loop '

//for in 
for(let i in num){
    console.log(i)
}
//this will print all the keys that are 0,1,2,3


//higher order array methods 
let a=[45,23,21]
let e1=a.map((value,index,a)=>{
    console.log(value,index,a)
    return value+index
})
console.log(e1)// these array don't make anyt changes in the original array 
//this map function is used to create a new array 
// index is actually the index from array a same is the case with value 


//array filter
let arr2=[3,24,45,67,0,5]
let a2=arr2.filter((value)=>{
    return value<10
})//same is the case with this function 


//array reduce method 
let arr3=[3,24,45,67,0,5]
let a3=arr3.reduce((h1,h2)=>
{
    return h1+h2
})//this will give us a single value in the end by adding all the number sin pairs 