console.log("Script loaded successfully!");

const startButton = document.getElementById("start-quiz-btn");
console.log(startButton);

const clueText = document.getElementById("clue-text");

const submitButton = document.getElementById("submit-guess-btn");
const guessInput = document.getElementById("guess-input");

const correctAnswer = "Charmander"; // Example correct answer

startButton.addEventListener("click", function() {
    console.log("Start Quiz button clicked!");
    // Add your quiz starting logic here
    clueText.textContent = "This Pokemon is a Fire-type.";
});

submitButton.addEventListener("click", checkGuess);


function checkGuess() {
    if (guessInput.value.toLowerCase() === correctAnswer.toLowerCase()) {
        console.log("Correct guess!");}
     else {
        console.log("Incorrect guess. Try again!");
    }
}     