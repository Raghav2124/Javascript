console.log(document.body.firstChild)//this will give text because of the space after body tag 
console.log(document.body.childNodes)
console.log(document.body.lastChild)
let arr=Arrayfrom(document.body.childNodes)//earlier it wasn't an array as it was a node list 
console.log(arr)    