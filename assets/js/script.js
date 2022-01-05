/**
 * This function loads exinction AI Survival Test on page load.
 * This was copied and adapted from Love Maths walkthrough project
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    runGame("addition");

});


/**
 * Generates a question randomly from an array of questions
 */
function questionGenerator() {

}

/**
 * Array of corresponding answers to the questions in questionGenerator()
 */
let answers = [];


/**
 * Function checks users answer to questions from questionGenerator()
 */
function checkAnswer() {

}

/**
 * Incremenets correct answers to questions
 */
function correctAnswerIncrement() {

}

/**
 * Incremenets incorrect answers to questions
 */
 function incorrectAnswerIncrement() {

}

/**
 * Ends the game and produce the outcome - survival or death
 */
 function outcome() {

}

