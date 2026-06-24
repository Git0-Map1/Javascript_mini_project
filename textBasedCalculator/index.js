
const prompt = require("prompt-sync")()
function getNumber(numberString){

    while(true){
        number = parseFloat(prompt("Enter number " + numberString + ": "))
        if(isNaN(number)){
            console.log("invalid")
        }
        else{
            return number
        }
    }
}

const num1 = getNumber('one')
const num2 = getNumber('two')
const operator = prompt("Enter the operator sign: ")

let result;
let valid = true;
switch(operator){
    case "+":
        result = num1 + num2;
        break
    case "-":
        result = num1-num2
        break
    case "*":
        result = num1*num2
        break
    case "/":
        if(num2==0){
            valid = false
            console.log("invalid zero division")
            
        }
        result = num1/num2;
        break
    default:
        console.log("invalid operator")
        valid = false
        break
        
    }
    
if(valid) console.log(number1, operator, number2, "=", result)