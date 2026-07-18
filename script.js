console.log("Script loaded successfully!");

const startButton = document.getElementById("start-quiz-btn");
console.log(startButton);

const clueText = document.getElementById("clue-text");

const submitButton = document.getElementById("submit-guess-btn");
const guessInput = document.getElementById("guess-input");

const pokemonImage = document.getElementById("pokemon-image");

const scoreDisplay = document.getElementById("score-display");

const nextPokemonButton = document.getElementById("next-pokemon-btn");

const generationRanges = {
  "1": [1, 151],
  "2": [152, 251],
  "3": [252, 386],
  "4": [387, 493],
  "5": [494, 649],
  "6": [650, 721],
  "7": [722, 809],
  "8": [810, 905],
  "9": [906, 1025],
  "10": [1, 1025]
};

const generationSelect = document.getElementById("generation-select");

let correctAnswer = ""; // Example correct answer
let score = 0; // Initialize score

startButton.addEventListener("click", function() {
    nextPokemonButton.classList.add("hidden");
    startNewRound(); 
});

nextPokemonButton.addEventListener("click", startNewRound);

submitButton.addEventListener("click", checkGuess);


function startNewRound() {
    console.log("Start Quiz button clicked!");
    guessInput.disabled = false; // Enable the input field for a new guess
    submitButton.disabled = false;
    
    // Add your quiz starting logic here
    const selectedValue = generationSelect.value;
    const range = generationRanges[selectedValue]; // e.g. [1, 151]
    const min = range[0]; // first item in the array
    const max = range[1]; // second item in the array

    const randomPokemonId = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random Pokemon ID within the selected generation

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
  .then(response => response.json())
  .then(data => {
    clueText.innerHTML = `This Pokemon's primary type is ${data.types[0].type.name.toUpperCase().bold()}.`;
    //console.log(data);
    correctAnswer = data.name; // Set the correct answer based on the fetched data
    pokemonImage.src = data.sprites.front_default; // Update the image to the Pokemon's sprite
    console.log(correctAnswer);
    console.log(randomPokemonId);
    guessInput.value = ""; // Clear the input field for a new guess
    pokemonImage.classList.add("silhouette");
});
}

function checkGuess() {

    if (guessInput.value.trim() === "") {
        clueText.textContent = "Please enter a guess first!";
        return;
}

    if (guessInput.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        pokemonImage.classList.remove("silhouette"); // Reveal the Pokemon image
        console.log("Correct guess!");
        clueText.innerHTML = `Correct!!! It's ${correctAnswer.toUpperCase().bold()}.`;
        nextPokemonButton.classList.remove("hidden"); // Show the "Next Pokemon" button
        //guessInput.value = ""; // Clear the input field for a new guess
        score=score+100; // Increment score
        scoreDisplay.textContent = score; // Update the score display
        }
     else {
        console.log("Incorrect guess. Try again!");
        clueText.innerHTML = `Incorrect!!! It's ${correctAnswer.toUpperCase().bold()}. Start a new interrogation to try again.`;
        pokemonImage.classList.remove("silhouette"); // Reveal the Pokemon image
        guessInput.disabled = true;
        submitButton.disabled = true;
        nextPokemonButton.classList.add("hidden"); // Hide the "Next Pokemon" button
    }
}     

