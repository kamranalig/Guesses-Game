let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let userGuesses = [];

let counter = 0;

const handleSubmit = () => {
  const userInput = document.getElementById("user-number");
  const displayText = document.getElementById("display-text");
  const outputsPara = document.getElementsByClassName("outputs");

  // check if counter value exceeds 10, if yes, return, otherwise continue
  if (counter >= 3) {
    displayText.innerText = "Game Over. You are out of guesses.";
    resetGame();
    return;
  }
  const userNumber = userInput.value;
  if (userNumber == randomNumber) {
    displayText.innerText = getDisplayText("success");
    displayText.className = "success";
  }
 
  else if (userNumber > randomNumber && userNumber <101) {
      displayText.innerText = getDisplayText("greater");
    displayText.className = "greater";
  } else if (userNumber < randomNumber && userNumber>0) {
    displayText.innerText = getDisplayText("lower");
    displayText.className = "lower";
  } else {
    displayText.innerText = "Your guessed number is out of the range.";
  }

  // show user guessed numbers
  if (userInput.value>0 && userInput.value<101) {
    userGuesses.push(userInput.value);
    outputsPara[0].innerText = userGuesses; 
  }
// increment the counter value
  counter++;

  // reset input field
  userInput.value = "";
};

const resetGame = () => {
  const userInput = document.getElementById("user-number");
  const outputsPara = document.getElementsByClassName("outputs");

  userInput.value = "";
  userGuesses = [];
  counter = 0;
  outputsPara[0].innerText = "";
}; 

const getDisplayText = (result) =>{
         switch (result) {
            case "success":
                return "Congratulation. You guessed The correct number.";
            case "greater":
                return "Your guessed number is greater than the actual number.";
            case "lower":
                return "Your guessed number is lower than the actual number.";
            default:
                 "You Loss The Game";
                break;
        }
    }




// let randomNumber = Math.floor(Math.random()*100)+1;
// // console.log(randomNumber);

// let userGuesses = [];

// let counter = 0;

// const handleSubmit = () =>{
//     const userInput = document.getElementById("user-number");
//     const displayText = document.getElementById("display-text");
//     const outputsPara = document.getElementsByClassName("outputs");

// if(counter >= 3){
//     displayText.innerText = "Game Over. You Are out Of Guesses.";
//     // resetGame();
//     return;

// }
// const userNumber = userInput.value;
   
//   if (userNumber == randomNumber) {
//         displayText.innerText = getDisplayText("success");
//         displayText.className = "success";
//         console.log("success");
//     } 
//     else if (userNumber > randomNumber){
//         displayText.innerText = getDisplayText("greater");
//         displayText.className = "greater";
//         console.log("greater");
//     }
  
//     else if (userNumber < randomNumber && userNumber>0 ){
//         displayText.innerText = getDisplayText("lower");
//         displayText.className = "lower";
//         console.log("lower");
//     } 
//     else{
//         displayText.innerText = "Your guessed number is out of the range.";
//     }

//     // show user guesed number
// if (userInput.value>0 && userInput.value<101) {
//     userGuesses.push(userInput.value);
//     outputsPara[0].innerText = userGuesses;
// }
   

//     //increment the counter value
//     counter++;
//   userInput.value = "";
// }

// const resetGame = () => {
//     const userInput = document.getElementById("user-number");
//     const outputsPara = document.getElementsByClassName("outputs");

//     userInput.value = "";
//     userGuesses =[];
//     counter = 0;
//     outputsPara[0].innerText = "";
// }

// const getDisplayText = (result) =>{
//     switch (result) {
//         case "success":
//             return "Congratulation. You guessed The correct number.";
//         case "greater":
//             return "Your guessed number is greater than the actual number.";
//         case "lower":
//             return "Your guessed number is lower than the actual number.";
//         default:
//              "You Loss The Game";
//             break;
//     }
// }

