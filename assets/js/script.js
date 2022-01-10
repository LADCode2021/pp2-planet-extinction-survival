/*jshint esversion: 6 */

/**
 * Button initiates game by deleting intro text div and appending quiz div.
 * Loads loop to get answers from newly created quiz.
 */

//Logic adapted from Love Math project and will throw JS Hint error. Avoiding this will be shown in later modules.
let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.addEventListener("click", function () {
        if (this.getAttribute("data-type") === "submit") {
            document.getElementById('intro-area').className = "invisible";
            document.getElementById('question-area').className = "visible";

            //Logic adapted from Love Math project and will throw JS Hint error. Avoiding this will be shown in later modules.
            let inputs = document.getElementsByTagName("input");

            for (let input of inputs) {
                input.addEventListener("focusout", function (e) {
                    let id = e.target.id;
                    let val = e.target.value;
                    if (val === null) {

                    } else if (this.getAttribute("data-type") === "answer" && val.length >= 1) {
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
    decideOutcome();
}


/**
 * Incremenets correct answers to questions
 */
function correctAnswerIncrement() {

    //Adapted from Love Running walkthrough project
    let oldScore = parseInt(document.getElementById("correct-score").innerText); //parseInt required to esnure strict equality of datatype between js and html
    document.getElementById("correct-score").innerText = ++oldScore;
}

/**
 * Incremenets incorrect answers to questions
 */
function incorrectAnswerIncrement() {

    //Adapted from Love Running walkthrough project
    let oldScore = parseInt(document.getElementById("incorrect-score").innerText); //parseInt required to esnure strict equality of datatype between js and html
    document.getElementById("incorrect-score").innerText = ++oldScore;
}


/** Function reloads document to restart game */

function reloadPage() {
    window.location.reload();
}

/** Ends the game and produces the outcomes - survival or death */
function decideOutcome() {


    if (parseInt(document.getElementById('incorrect-score').innerText) > 4) { //parseInt required to esnure strict equality of datatype between js and html
        document.getElementById('question-area').className = "invisible";
        document.getElementById('incorrect-outcome-area').className = "visible";
        document.getElementsByClassName('intro-title').className = "intro-title red";

        //Logic adapted from Love Math project and will throw JS Hint error. Avoiding this will be shown in later modules.
        let buttons = document.getElementsByTagName("button");

        for (let button of buttons) {
            button.addEventListener("click", function () {
                if (this.getAttribute("class") === "submit") {
                    reloadPage();
                }
            });
        }
    } else if (parseInt(document.getElementById('correct-score').innerText) === 6) { //parseInt required to esnure strict equality of datatype between js and html
        document.getElementById('question-area').className = "invisible";
        document.getElementById('correct-outcome-area').className = "visible";
        document.getElementsByClassName('intro-title').className = "intro-title green";

        //Logic adapted from Love Math project and will throw JS Hint error. Avoiding this will be shown in later modules.
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