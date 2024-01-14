
// START WITH A FUNCTION THAT WILL RANDOMELY RETURN EITHER:
// ROCK, PAPER OR SCISSORS.


let randomValue;

function getComputerChoice() {

    randomValue = Math.floor(Math.random() * 3);


  if (randomValue === 2) {

    console.log("rock");
  } 

   else if (randomValue === 1) {

    console.log("paper");
   }

    else {

        console.log("scissors");
    }

}
    getComputerChoice();

