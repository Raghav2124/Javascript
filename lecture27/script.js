alert("Enter the value of a !")
let a= prompt("Enter a here ","578")
// the second va;ue here is a default value
// document.write(a)
// this will write on the page the value of a which we entered
alert("The type of a you entered is " + typeof(a))
// this will always be string because prompt always takes string as input therefore to convert it to int we use 
a=Number.parseInt(a)
alert("The type of a you entered is " + typeof(a))
let wr=confirm("Are you sure You want to enter this value ?")
if(wr)
{
    document.write(a)
}
else
{
    document.write("Please allow me to write ")
}

