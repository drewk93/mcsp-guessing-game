// Feature 3

let isCorrect = false;

let min = 1
let max = 100
function getBetween1and100 (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let number = getBetween1and100(min, max)
let guessArray = []


function checkResponse(){
    let userResponse = parseInt(prompt("Guess a number between 1 & 100."))
    if (number === userResponse){
        alert(`Good job. Your guess of ${userResponse} was correct. You made ${guessArray.length} guesses.`)
        guessArray.push(userResponse)
        isCorrect = true;
    }
    else if (userResponse > number){
        alert(`Your guess was ${userResponse}. Guess lower.`)
        guessArray.push(userResponse)
    }
    else if (userResponse < number){
        alert(`Your guess was ${userResponse}. Guess higher.`)
        guessArray.push(userResponse)
    }
    else {
        alert ('You are so wrong because your guess was not a number')
        guessArray.push(userResponse)
    } 
}

do{
    checkResponse();
} while(!isCorrect)
console.log(guessArray)

