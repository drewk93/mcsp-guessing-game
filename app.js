// Feature 6

// function checkUser(){
//     for (let i = 0; i < userArray.length; i++){
//    if (userArray[i] === userName)
// }

// let number = Math.floor(Math.random() * 101)

// let user Obj = {}

function getBetween1and100 (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let number = getBetween1and100(min, max)
let guessArray = []

do{
    startGame()
    checkResponse();
} while(!isCorrect)

function startGame(){
    let userArray = []
    let userName = prompt("What is your username?")
    userArray.push(userName);
    let isCorrect = false;
    let min = 1
    let max = 3
}


/*TODO 
-1 make array take in strings and not just be NaN
-2 for loop to iterate over array to check for prior guesses - see function checkRepeatedNums()
*/
function checkResponse(){
    let userResponse = parseInt(prompt("Guess a number between 1 & 3."))
    if (number === userResponse){
        alert(`Good job ${userName}. Your guess of ${userResponse} was correct. You made ${guessArray.length} guesses.`)
        alert(`Your previous guesses were ${guessArray}`)
        isCorrect = true;
        let playAgain = prompt(`Would you like to play again?. If yes, input 'yes'; if no input 'no'.` )
        if (playAgain === 'yes'){
            startGame()
            checkResponse();
            isCorrect = false;
            guessArray = [];
        }else if (playAgain !== 'yes' || playAgain !== 'no'){
            alert(`There's no maybe. ${playAgain} is not a valid response dude.`)
    
        }
    }
    else if (userResponse > number){
        alert(`Sorry ${userName}. Your guess was ${userResponse}. Guess lower!`)
    }
    else if (userResponse < number){
        alert(`Sorry ${userName}. Your guess was ${userResponse}. Guess higher!`)
    }
    else {
        alert (`What is wrong with you ${userName}!!! You are so wrong because your guess was not a number`)
    } 

    guessArray.push(userResponse)
}



// function checkRepeatedNums(guessArray)




// console.log(guessArray)