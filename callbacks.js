// let a=prompt("What is your name ?")
// let b=prompt("What is your age?")
// let c=prompt("What is your favourite color?")
// console.log(a+ " is "+ b+ " years old and has "+ c+" as  favourite color. ")
//this is a synchronous action as this works one by one 
//asynchronous programming 
console.log("Start")
setTimeout(() =>{
    console.log("Hey i am good")
}, 3000);
//her set timeout is already initated at the bcak and will run when the task is completed 
console.log("End")
// Callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
      console.log("Loaded script with SRC: " + src)//this will be executed when we completed the loadscript function 
      callback(null, src);//this tells us that script is running fine and there is no error 
    }
    script.onerror = function() {
      console.log("Error loading script with SRC: " + src);
      callback(new Error("Src got some error"))//this function tells us if there is an error in the function and new Error() is a way to create a new error object. This is useful for representing errors in a standardized way    
    }
    document.body.appendChild(script);
  }
  
  function hello(error, src) {
    if (error) {
      console.log(error)
      return
    }
    alert('Hello World!' + src);
  }
  
  
  function goodmorning(error, src) {
    
    if (error) {
      console.log(error)
      sendEmergencyMessageToCeo();
      return
    }
    alert('Good morning' + src);
  }
  
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 