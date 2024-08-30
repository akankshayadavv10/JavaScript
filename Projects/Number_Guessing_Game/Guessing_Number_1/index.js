const numToGuess=Math.floor(Math.random() * 10) + 1;
const maxAttempts=3;
function GuessNumber(){
    for(let attempt=1;attempt<=maxAttempts;attempt++){
        const guess=parseInt(prompt(`enter the guessed number!`));
        if(guess===numToGuess){
            alert(`Congratulations!You guessed the correct number...`);
            return;
        }
        else if(attempt<maxAttempts){
            alert(`Wrong guesss...Try again!`);
        }
        else{
            alert("Limit is over of guessing...Better try next time!!")
        }
    }

}
 GuessNumber();