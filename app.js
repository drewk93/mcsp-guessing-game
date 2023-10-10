let userList = {
}

// gameApp for playing
play()
function play(){
    // get currentUser variable, to later push into userList.
    let currentUser = prompt('What is your username?')
    // create guess variable, with guessArray
    let guess = 0;
    let guessArray = [];
    // create min, max variables to limit random variable that follows.
    let max = 100;
    let min = 1;
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    // create guessing loop that runs comparison on number
    while (guess !== number){
            guess = parseInt(prompt(`Guess a number between 1 & 100 + ${number}`))
        if (typeof guess === "number"){
            guessArray.push(guess)
        }
        if (guess === number){
            alert(`Great job, ${currentUser}! Out of ${guessArray.length} guess${guessArray.length > 1 ? 'es' : ''}, your guess of ${guess} was correct.`)
            alert(`Guesses: ${JSON.stringify(guessArray)}`)
            checkHighScore();
            playAgain(currentUser)
        }
        else if (guess < number){
            alert(`Guess higher ${currentUser}!`)
        }
        else if (guess > number){
            alert(`Guess lower ${currentUser}!`)
        }
        userList[currentUser] = guessArray.length;
    }
    // create internal playAgain function that prompts user
    function playAgain (user) {
        let input = prompt(`Would you like to play again ${user}? 'Y' or 'N'?`)
        if (input === 'Y'){
            play();
        } alert (`Thanks for playing ${user}!`) 
    }
    function checkHighScore (){
        for (let [key, value] of Object.entries(userList)) {
        let beatHiScore = Math.abs(guessArray.length - value)
            if (currentUser === key && guessArray.length < value){ 
                userList[currentUser] = guessArray.length;
                 alert(`Good job! You beat your high score of ${value} by ${beatHiScore}. Your new high score is ${guessArray.length} `)
          }
    }
}
}

    // var playAgain = confirm('would you like to play again? 'Y' / 'N'?)
    // var playAgain = prompt('play again 'Y' / 'N'){
    // if (confirm){
    //  playGame()
    // } alert ('Thanks for playing)