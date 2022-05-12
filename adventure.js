// generate a random number DONE
// give the user the ability to guess
// if they guess and they are wrong, ask them again (hint)?
// if they win- say they won



function guessGame(){
    let randomNr = Math.floor(Math.random()* 11);
    let guess; 

    do{
        guess = prompt('Guess a number between 1-10 ');
        console.log(guess, randomNr);
        if (randomNr > guess){
            console.log('You guessed to low');
        }else if (randomNr < guess){
            console.log('Guess was too high');
        }
    }while (guess != randomNr)

    console.log('YOU WON')

    
}


guessGame();