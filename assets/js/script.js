/**Let's the DOM load before loading function.
 * Calls button to check answers.
 * This is taken from Love Math project.
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

});


/**
 * Function checks users answer to questions from questionGenerator()
 */
function checkAnswer() {

    let answers = [
        1,
        6,
        144,
        80,
        720,
        101,
        326,
        360,
        236,
        800,
    ];

    let qOne = parseInt(document.getElementById('a1').value);
    let qTwo = parseInt(document.getElementById('a2').value);
    let qThree = parseInt(document.getElementById('a3').value);
    let qFour = parseInt(document.getElementById('a4').value);
    let qFive = parseInt(document.getElementById('a5').value);
    let qSix = parseInt(document.getElementById('a6').value);
    let qSeven = parseInt(document.getElementById('a7').value);
    let qEight = parseInt(document.getElementById('a8').value);
    let qNine = parseInt(document.getElementById('a9').value);
    let qTen = parseInt(document.getElementById('a10').value);

    if (qOne === answers[0]) {
        document.getElementById('a1').style.backgroundColor = 'green';
    } else {
        alert(`${qOne} is incorrect. You are one step closer to death`)
        document.getElementById('a1').style.backgroundColor = 'red';
    }

}

/**
 * Incremenets correct answers to questions
 */
function correctAnswerIncrement() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
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