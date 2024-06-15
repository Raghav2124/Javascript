//add event listeners  is used to assign multiple handlers to an event 
let x=function(e){
    console.log(e.target)//it gives us the complete tag which we clicked 
    console.log(e.type, e.clientX, e.clientY)
    // alert("Hello World1!")
  }
let y=function(e){
    alert('Hello world!2')
}
btn.addEventListener('click',x)
btn.addEventListener('click',y)
let a=prompt("What is your favorite number? ")
if(a=='2')
    {
        btn.removeEventListener('click',x)
    }
    //remove event listener is used to remove the event listener from the element and it works only works when function object is same
    // if(a=='2')
    //     {
    //         btn.removeEventListener('click',function(e){
    //             alert('Hello world!2')
    //         })
    //     }
    //this will not work as the function object is not same  as it creates a new function object 

    //remeber when an event happens th ebrowser creates an object puts it into it and passes it as an argument to the handler