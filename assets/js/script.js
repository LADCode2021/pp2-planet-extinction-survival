/**Let's the DOM load before loading function.
 * Calls button to check answers.
 * This is taken from Love Math project.
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert('The AI require all questions to be answered')
            } else {
                checkAnswer();
            }
        });
    }

    let inputs = document.getElementsByTagName("input");

    for (let input of inputs) {
        input.addEventListener("input", function (e) {
            if (this.getAttribute("data-type") === "answer") {
              let id = e.target.id;
              let val = e.target.value;
              checkAnswer(id, val);
            
        }

    })
}

});


/**
 * Function checks users answer to questions from questionGenerator()
 */
function checkAnswer() {

    let answers = {
        a1: 1,
        a2: 6,
        a3: 144,
        a4: 80,
        a5: 720,
        a6: 101,
        a7: 326,
        a8: 360,
        a9: 236,
        a10: 800,
      };
      let answer = answers[id];
      if (answer == value) {
        document.getElementById(id).style.backgroundColor = "green";
      } else {
        document.getElementById(id).style.backgroundColor = "red";
      }
}

/**Checks if all answer fields have been filled in */

function checkValidInput() {
    inputs = document.getElementsByTagName('input').value;

}

/**
 * Incremenets correct answers to questions
 */
function correctAnswerIncrement() {

    let oldScore = parseInt(document.getElementById("correct-score").innerText);
    document.getElementById("correct-score").innerText = ++oldScore;
}

/**
 * Incremenets incorrect answers to questions
 */
function incorrectAnswerIncrement() {
    let oldScore = parseInt(document.getElementById("incorrect-score").innerText);
    document.getElementById("incorrect-score").innerText = ++oldScore;
}

/**
 * Ends the game and produce the outcome - survival or death
 */
function outcome() {

}