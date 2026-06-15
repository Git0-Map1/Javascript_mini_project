const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hello" , name, "Welcome to the game")

const question = prompt("Do you want to play the game? ")
if(question === "yes" || question === "y"){
    console.log("Entering the game in 3.. 2.. 1..")
    console.log("you are in the middle of the maze now you need to escape by finding the exit.")

    const choice1 = prompt("do you want to go left or right?" )
    if(choice1 === "left"){
        const choice2 = prompt("you are on right track. choose either bridge1 or bridge2 ? ")
        
        if(choice2==="bridge1"){
            console.log("the bridge was weak, you didnt cross the bridge. you lose..")
        }
        else if(choice2 ==="bridge2"){
            console.log("good choice. you finally reach to the exit point. you win..")
        }
        else{
            console.log("invalid input")
        }
    }
    else if(choice1 === "right"){
        console.log("you fell of the cliff and you lose..")
    }
    else{
        console.log("invalid choice")
    }

}
else if(question === "no" || question ==="n"){
    console.log("okay :(")
}
else{
    console.log("invalid input....")
}