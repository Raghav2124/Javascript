//q1
document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"
//q2 it doesn't show up when we do view page source but when we inspect it browser will add it automatically 
//q3
document.getElementsByTagName("nav")[0].firstElementChild.style.color="green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color="green"

//q4
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.background = "cyan";
  })
//important question

