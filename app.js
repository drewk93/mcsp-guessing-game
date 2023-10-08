let userObject = {
}

play()
function play(){
    let currentUser = prompt('What is your username?')

    let guess = 0;
    let guessArray = [];
    let max = 100;
    let min = 1;
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    while (guess !== number){
            guess = parseInt(prompt(`Guess a number between 1 & 100 + ${number}`))
        if (typeof guess === "number"){
            guessArray.push(guess)
        }
        if (guess === number){
            alert(`Great job, ${currentUser}! Out of ${guessArray.length} guess${guessArray.length > 1 ? 'es' : ''}, your guess of ${guess} was correct.
            \n Guesses: ${guessArray}`)
            checkHighScore();
            playAgain(currentUser, prompt(`Would you like to play again ${currentUser}? 'Yes' or 'No'?`))
        }
        else if (guess < number){
            alert(`Guess higher ${currentUser}!`)
        }
        else if (guess > number){
            alert(`Guess lower ${currentUser}!`)
        }
    }
    function playAgain (user, input) {
        if (input === 'Yes'){
            play();
        }
        else {
            alert (`Thanks for playing ${user}!`)
        }
    }
    function checkHighScore (){
        for (let [key, value] of Object.entries(userObject)) {
            if (currentUser === key && guessArray.length < value){ 
                userObject[currentUser] = guessArray.length;
                 alert(`Good job. You beat your high score of ${value}`)
            }
          }
    }
}



