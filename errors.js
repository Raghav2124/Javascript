setTimeout(()=>{
    console.log("Hacking wifi.... Please wait..." ) 
    }, 1000)
    
    try{
            setTimeout(()=>{ 
                    console.log(rahul)  
            }, 100)
            //this will show an error as try and catch work for synchronous and it doesn't work for elements that are sheduled but if we put the try catch within settimeout it still works
    }
    catch(err){
            console.log("Balle balle")
    }
    
    
    setTimeout(()=>{ 
            console.log("Fetching username and password.... Please wait..." )
    }, 2000) 
    
    setTimeout(()=>{ 
    console.log("Hacking Rahul's facebook id.... Please wait..." )
    }, 3000) 
    
    setTimeout(()=>{ 
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
    }, 4000) 