/*jshint esversion: 6 */

/**Let's the DOM load before loading button function.
 * Button initiates game by deleting intro text div and appending quiz div.
 * Loads loop to get answers from newly created quiz.
 * This is adapted from Love Math project.
 */

let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.addEventListener("click", function () {
        if (this.getAttribute("data-type") === "submit") {
            document.getElementById('intro-text').className = "invisible";
            document.getElementById('question-area').className = "visible";
            document.getElementById('submit-answer-container').className = "invisible";
            document.getElementById('scores-counter').className = "visible";

            let inputs = document.getElementsByTagName("input");

            for (let input of inputs) {
                input.addEventListener("focusout", function (e) {
                    let id = e.target.id;
                    let val = e.target.value;
                    if (val == 0) {

                    } else if (this.getAttribute("data-type") === "answer") {
                        checkAnswer(id, val);
                    }
                });
            }
        }
    });
}

/** Function checks user inputted answers from DOM */
function checkAnswer(id, val) {

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
    if (answer == val) {
        document.getElementById(id).style.backgroundColor = "green";
        document.getElementById(id).disabled = true;
        correctAnswerIncrement();
    } else {
        document.getElementById(id).style.backgroundColor = "red";
        document.getElementById(id).disabled = true;
        incorrectAnswerIncrement();

    }
    outcome();
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


/** Function reloads document to restart game */

function reloadPage() {
    window.location.reload();
}

/** Ends the game and produces the outcomes - survival or death */
function outcome() {

    if (parseInt(document.getElementById('incorrect-score').innerText) > 4) {
        document.getElementById('question-area').className = "invisible";
        document.getElementById('scores-counter').className = "invisible";
        document.getElementById('grave-image-container').className = "visible";
        document.getElementById('restart-button').className = "vertical-center";
        let buttons = document.getElementsByTagName("button");

        for (let button of buttons) {
            button.addEventListener("click", function () {
                if (this.getAttribute("class") === "submit") {
                    reloadPage();
                }
            });
        }
    } else if (parseInt(document.getElementById('correct-score').innerText) > 1) {
        document.getElementById('question-area').className = "invisible";
        document.getElementById('scores-counter').className = "invisible";
        document.getElementById('video-container').className = "visible";
        document.getElementById('restart-button').className = "vertical-center";

        let buttons = document.getElementsByTagName("button");

        for (let button of buttons) {
            button.addEventListener("click", function () {
                if (this.getAttribute("class") === "submit") {
                    reloadPage();
                }
            });
        }
    }

}