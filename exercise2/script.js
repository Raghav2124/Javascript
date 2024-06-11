let user=prompt("Enter S,W or G")
let computer=Math.floor(Math.random()*3)
let options=["S","W","G"]
const match=(user,y)=>{
    if(user===y)
        {
            return "Draw"
        }
    else if(user=="S"&&y==="W")
        {
            return "user"
        }
    else if(user=="W"&&y=="S")
    {
        return "computer"
    }
    else if(user=="S"&&y=="G")
    {
        return "computer"
    }
    else if(user=="G"&&y=="S")
        {
            return "user"
        }
        else if(user=="W"&&y==="G")
        {
            return "user"
        }
}
let result=match(user,options[computer])
document.write(`Computer ${options[computer]} and user ${user} and the result of the match are`+ result)