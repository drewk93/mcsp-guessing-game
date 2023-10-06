// Who is playing
// Create a prompt inside a function
// Create random number with Math.random()
// Create a while loop in order to execute the prompt at least once 
// Create a switch statement for  

let number = 50

let userResponse = prompt("Guess a number between 1 & 100.")

if (number === parseInt(userResponse)){
    alert('Good job')
}
else if (parseInt(userResponse) > number){
    alert('Guess lower')
}
else if (parseInt(userResponse) < number){
    alert('Guess higher')
}
else {
    alert ('You are so wrong')
}




console.log(userResponse)


