console.log("Script loaded successfully!");

const startButton = document.getElementById("start-quiz-btn");
console.log(startButton);

const clueText = document.getElementById("clue-text");

const submitButton = document.getElementById("submit-guess-btn");
const guessInput = document.getElementById("guess-input");

const pokemonImage = document.getElementById("pokemon-image");

let correctAnswer = ""; // Example correct answer

startButton.addEventListener("click", function() {
    console.log("Start Quiz button clicked!");
    // Add your quiz starting logic here
    

    const randomPokemonId = Math.floor(Math.random() * 1024) + 1; // Generate a random Pokemon ID between 1 and 1024
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
  .then(response => response.json())
  .then(data => {
    clueText.textContent = `This Pokemon's primary type is ${data.types[0].type.name.toUpperCase()}.`;
    //console.log(data);
    correctAnswer = data.name; // Set the correct answer based on the fetched data
    pokemonImage.src = data.sprites.front_default; // Update the image to the Pokemon's sprite
    console.log(correctAnswer);
    console.log(randomPokemonId);
    guessInput.value = ""; // Clear the input field for a new guess
    pokemonImage.classList.add("silhouette");
});
});

submitButton.addEventListener("click", checkGuess);


function checkGuess() {
    if (guessInput.value.toLowerCase() === correctAnswer.toLowerCase()) {
        pokemonImage.classList.remove("silhouette"); // Reveal the Pokemon image
        console.log("Correct guess!");
        guessInput.value = ""; // Clear the input field for a new guess
        }
     else {
        console.log("Incorrect guess. Try again!");
    }
}     

