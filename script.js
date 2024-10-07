// console.log("Enter a number between 1 and 10");

// let guessNumber = Math.floor(Math.random() * 10) + 1;

// let userNumber = prompt("Enter a number between 1 and 10");

// userNumber = parseInt(userNumber);

// if (userNumber == guessNumber) {
//   console.log("Congratulations! You guessed the right number");
// } else {
//   console.log(`Sorry, the number was ${guessNumber}`);
// }


// Generate a random number between 1 and 10
const guessNumber = Math.floor(Math.random() * 10) + 1;

// Get elements from the DOM
const input = document.getElementById('userInput');
const button = document.getElementById('submitButton');
const result = document.getElementById('result');

// Add event listener to the button
button.addEventListener('click', function() {
    const userNumber = Number(input.value);

    if (userNumber < 1 || userNumber > 10) {
        result.textContent = "Please enter a valid number between 1 and 10.";
    } else if (userNumber === guessNumber) {
        result.textContent = "Congratulations! You guessed the right number!";
    } else {
        result.textContent = `Sorry, the number was ${guessNumber}.`;
    }
});