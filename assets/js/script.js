/**
 * This function loads exinction AI Survival Test on page load.
 * This was copied and adapted from Love Maths walkthrough project
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    runGame("addition");

});


/**
 * Generates a question randomly from an array of questions.
 * Questions adapted from: https://readymadepubquiz.com/tag/maths/, https://triviaquiznight.com/maths-quiz-questions-and-answers/
 */

 function shuffle(array) {
    // Loop from the last element to the second element
    for(let i = array.length - 1; i > 0; i--) {
      // Generate random index from remaining unshuffled elements
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

    let questions = shuffle([
        'What does 6 to the power 0 equal?', //0
        'What is the highest common factor of 30 and 132?', //1
        'How many months are there in twelve Earth years?', //2
        'Geoff thinks of a number. He deducts five from it and then divides the result by three. His answer is 25. What number did he start with?', //3
        'How many seconds are there in 12 minutes?', //4
        'Which is the closest prime number to 100?', //5
        'What is 20% of 1630?', //6
        'How many minutes are there in a quarter of a day?', //7
        'What is 80% of 295?', //8
        'How many millimetres are there in 80cm?' //9
    ]);

    
    let currentQuestion = 0;
    function questionGenerator() {
      document.getElementById('question-gen').innerHTML = questions[currentQuestion++];
    }

    questionGenerator();

/**
 * Array of corresponding answers to the questions in questionGenerator()
 */
let answers = [];


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