//  an event is basically a signal that something has happened 
//also whatever we do on browser we are creating a event 
let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}