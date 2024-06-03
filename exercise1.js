let number=Math.floor((Math.random() * 100) + 1);
let n=prompt("Guess the number")
n=Number.parseInt(n)
let count =99
while(n!=number){
    if(n<number){
        n=prompt("Enter a larger  number")
        n=Number.parseInt(n)
        count--
    }
    else{
        n=prompt("Enter a smaller number")
        n=Number.parseInt(n)
        count--
    }
}
console.log(`The user enterd number  is equal to the given ${number} and the score of user${count} `)