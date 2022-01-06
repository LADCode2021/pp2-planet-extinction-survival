/**Let's the DOM load before loading button function.
 * Button initiates game by deleting intro text div and appending quiz div.
 * Loads loop to get answers from newly created quiz.
 * This is adapted from Love Math project.
 */

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                document.getElementById('intro-text').innerHTML = "";
                let gameContent = document.createElement('div');
                gameContent.id = 'question-area';
                gameContent.innerHTML = `
                <table>
        <tr>
            <th class="lalign">Question</th>
            <th>Answer</th>
        </tr>
        <tr>
            <td id="q1">What does 6 to the power 0 equal?</td>
            <td><input class="answer" data-type="answer" id="a1" type="number"></td>
        </tr>

        <tr>
            <td id="q2">What is the highest common factor of 30 and 132?</td>
            <td><input class="answer" data-type="answer" id="a2" type="number"></td>
        </tr>
        <tr>
            <td id="q3">How many months are there in twelve Earth years?</td>
            <td><input data-type="answer" id="a3" type="number"></td>
        </tr>
        <tr>
            <td id="q4">Geoff thinks of a number. He deducts five from it and then divides the result by three.
                His answer is 25. What number did he start with?</td>
                <td><input data-type="answer" id="a4" type="number"></td>
        </tr>
        <tr>
            <td id="q5">How many seconds are there in 12 minutes?</td>
            <td><input data-type="answer" id="a5" type="number"></td>
        </tr>
        <tr>
            <td id="q6">Which is the closest prime number to 100?</td>
            <td><input data-type="answer" id="a6" type="number"></td>
        </tr>
        <tr>
            <td id="q7">What is 20% of 1630?</td>
            <td><input data-type="answer" id="a7" type="number"></td>
        </tr>
        <tr>
            <td id="q8">How many minutes are there in a quarter of a day?</td>
            <td><input data-type="answer" id="a8" type="number"></td>
        </tr>
        <tr>
            <td id="q9">What is 80% of 295?</td>
            <td><input data-type="answer" id="a9" type="number"></td>
        </tr>
        <tr>
            <td id="q10">How many millimetres are there in 80cm?</td>
            <td><input data-type="answer" id="a10" type="number"></td>
        </tr>
    </table>
                `
                document.getElementById('game-area').appendChild(gameContent)

                let scoresArea = document.createElement('div');
                scoresArea.id = 'scores-counter'
                scoresArea.innerHTML = `
                <p>Correct Answers: <span id="correct-score">0</span></p>
    <p>Incorrect Answers: <span id="incorrect-score">0</span></p>
                `
                document.getElementById('game-area').appendChild(scoresArea)

                let inputs = document.getElementsByTagName("input");

                for (let input of inputs) {
                    input.addEventListener("focusout", function (e) {
                        let id = e.target.id;
                        let val = e.target.value;
                        if (val == 0) {

                        } else if (this.getAttribute("data-type") === "answer") {

                            checkAnswer(id, val);

                        }

                    })
                }

                var buttonDel = document.getElementById('submit-answer'); 
                buttonDel.style.display = "none";


            } else {
                alert('Game failed to load')
            }
        });
    }

});


/**
 * Function checks user inputted answers from DOM
 */
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
    outcome()
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
    
    if (parseInt(document.getElementById('incorrect-score').innerText) > 4) {
        let imageCreate = document.createElement('img');
        imageCreate.id = "incorrect-outcome";
        imageCreate.src = "assets/images/grave.jpg";
        imageCreate.alt = "Image of a grave";
        document.getElementById('game-area').innerHTML = "";
        document.getElementById('game-area').appendChild(imageCreate)

    }
    
    if (parseInt(document.getElementById('correct-score').innerText) > 1) {
        let videoCreate = document.createElement('iframe');
        videoCreate.id = "correct-outcome"
        videoCreate.src = "https://www.youtube.com/embed/WZvtrnFItNs?controls=0&amp;start=15770"
        videoCreate.title = "YouTube video player"
        videoCreate.frameBorder = '0'
        videoCreate.allow = "autoplay"
        document.getElementById('game-area').innerHTML = "";
        document.getElementById('game-area').appendChild(videoCreate)

    }

}