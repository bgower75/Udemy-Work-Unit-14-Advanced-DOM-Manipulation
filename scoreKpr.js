var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Count = document.querySelector("#p1Count");
var p2Count = document.querySelector("#p2Count");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");
var scoreInput = document.querySelector("input");
var para = document.querySelector("p span");

p1Button.addEventListener('click', function() { //when player1 button clicked
  if(!gameOver) { //if gameover is false
    p1Score++; //increase the score by 1
    if(p1Score === winningScore) { //have we reached the winning score
      gameOver = true; //yes gameover is now true
      p1Count.classList.add("winning"); //add the class "winning" to turn the score green
    }
    p1Count.textContent = p1Score; //update the text of what player1's score is
  }
});

p2Button.addEventListener("click", function() {
  if(!gameOver) {
    p2Score++;
    if(p2Score === winningScore) {
      gameOver = true;
      p2Count.classList.add("winning");
    }
    p2Count.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() { //when reset button is clicked
  reset(); // run the reset function
})

function reset() { //reset all necessary elements to start the game again
  gameOver = false;
  p1Score = 0; //reset the score
  p2Score = 0;
  p1Count.classList.remove("winning"); //remove the class
  p2Count.classList.remove("winning");
  p1Count.textContent = p1Score; //reset the text score
  p2Count.textContent = p2Score;
}

scoreInput.addEventListener("change", function() { // when the input list's value is changed
  para.textContent = this.input.value; //update the paragraph with the number to match what is selected from the list
  winningScore = Number(this.value); //update the winning score to play to, to match selection (ensuring its a number and not a string)
  reset(); //run the reset function if the selection is changed during a game to start the game again
})
