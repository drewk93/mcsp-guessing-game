// The main function will be the start of execution for the program
const main = function() {

    // Creates an object to hold user's names and their high scores
    let highScores = {}

    // The play loop, calls the play function for as long as the user wishes
    let playing = true
    while(playing) {
        play(highScores)
        playing = prompt("Would you like to play again? [Y/N]").trim()
        if(playing.length !== 0) {
            playing = playing[0].toUpperCase() === "Y"
        }
    }
    alert("Okay, thanks for playing!")
}

// The play function is the gameplay
const play = function(highScores) {

    // Gets the user's name
    let name = ""
    while (name === "") {
        name = prompt("What's your name?")
    }

    // Here we generate a random number from 1 100
    let minNumber = 1
    let maxNumber = 100
    let number = Math.round((Math.random() * (maxNumber - minNumber))) + minNumber

    // Guessing loop
    let currentGuess = undefined
    let guesses = []
    while(currentGuess !== number) {

        // Gets the user's guess
        currentGuess = parseInt(prompt("Enter your guess:"))
        while(isNaN(currentGuess)) {
            currentGuess = parseInt(prompt("Enter your guess:"))
        }
        guesses.push(currentGuess)


        // Sees if the user's guess is the correct number
        if (currentGuess === number) {

            // The beginning and ending of the message
            let messageBeginning = `Correct, ${name}! It only took you ${guesses.length} guess${guesses.length === 1 ? "" : "es"}!`
            let messageEnd = `\nGuesses: ${guesses}`

            // If the user doesn't currently have a high score, their current score becomes the high score
            if(highScores[name] === undefined) {
                alert(`${messageBeginning} ${messageEnd}`)
                highScores[name] = guesses.length
            }
            
            // For when the user's current score matches their high score
            else if (highScores[name] === guesses.length) {
               alert(`${messageBeginning} That's the same as your current high score of ${highScores[name]}! ${messageEnd}`)
            }
            
            // For when the user beats their high score
            else if (highScores[name] > guesses.length) {
                alert(`${messageBeginning} That's a new high score! ${messageEnd}`)
                highScores[name] = guesses.length
            }
            
            // For when the user doesn't beat their high score
            else if (highScores[name] < guesses.length) {
                alert(`${messageBeginning} That's worse than your high score of ${highScores[name]}. ${messageEnd}`)
            }
        }

        // If the guess was too low or too high, inform the user
        else if (currentGuess < number) {
            alert(`Sorry, ${name}, guess higher.`)
        } else {
            alert(`Sorry, ${name}, guess lower.`)
        }
    }
}

// Calls the main function and starts the program
main()