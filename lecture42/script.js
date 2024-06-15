// let second=document.getElementById("second")
console.log(second.getAttribute('class') )//it also works if we write it like this because we can access directly with the axis but it is not prefered
let a=second.getAttribute('class')// it returns the name which we give to a class 
console.log(a)
console.log(second.hasAttribute("class"))
console.log(second.hasAttribute("style"))//this will give us true amd false in the console
// console.log(second.setAttribute("hidden","true"))//this is helps us to add or change he value of a attribute ("class","value")
// we can also give two classes if we seperate them using a space like 
// second.setAttribute("class","first second")
// second.removeAttribute("class")//this helps to remove the attribute that we write here 
//second.Attributes it will give us all the attributes of that element and it wiill return a named nodemap instance 
console.log(second.dataset)//this give the attributes which we define using the data-