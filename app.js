let min = 1;
let isPlaying = true;

let level = 10;
let guesses = [];
let easyLevel = 10;
let mediumLevel = 100;
let hardLevel = 1000;
selectDifficulty();
let rand= getNumber();

while (isPlaying) {
  turn();
}
function turn() {
  let input =
   Number(prompt(`Hello! Can you guess my favorite 
    number between ${min} and ${level}?.`));

  if (isNaN (input)) {
    return alert(`Please enter a valid number between ${min} and ${level}.`);
  }
  if (input < rand) {
    alert("Too low. Better luck next time.");
  } else if (input > rand) {
    alert("Too high. Better luck next time.");
  } else if (input == rand) {
    alert("Congratulations! Today is your lucky day.");
    isPlaying = false;
  }
  
}





// select difficulty level //

function selectDifficulty() {
  
  let difficulty =   prompt(`Hello, ${this.name}! Please select your preferred level of difficulty.`);

  
  if (difficulty === "1") {
    level = easyLevel;
  } else if (difficulty === "2") {
    level = mediumLevel;
  } else if (difficulty === "3") {
    level = hardLevel;
  }
  
}



// generate random number //

function getNumber() {
  return Math.floor(Math.random() * level) +1;
}
//call functions //




function guess(guess) {
  console.log(guess);
  if (guess == rand) {
    input.value = "";
    right();
  } else {
    input.value = "";
   wrong();
  }
}
function right() {
  console.log("Lucky you!");
}
function wrong() {
  console.log("Better Luck Next Time");
}
function replay() {
  console.log("Wanna Spin Again?");
}
