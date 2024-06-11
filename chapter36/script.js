//change the card title to red 
let ctitle=document.getElementsByClassName("card-title")[0]//here 0 is because we want to change select only the first elemennt of the class and not all of them 
ctitle.style.color="red "
let ct=document.getElementById("firstcardtitle")
let ctitles=document.querySelectorAll(".card-title")//this select all class with the given name and for class we use . and for id we use #
ctitles[0].style.color="red"
ctitles[1].style.color="blue"
ctitles[2].style.color="green"
console.log(ctitles)
document.querySelector(".this").style.color="cyan"//this selects the first element of the given class
//this is a bit more efficent 
document.querySelector(".this").style.color="cyan"
//remeber we can add more than one class in a single class just by seperating them witha  space 
console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))//this will go to the first class with name card and there it will search for element with tagname a 
console.log(document.getElementsByName("search"))