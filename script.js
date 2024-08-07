// script.js
const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(userChoice, computerChoice);
        document.getElementById('result').textContent = result;
    });
});

function determineWinner(user, computer) {
    // Implement your logic here (compare user and computer choices)
    // Return the result (e.g., "You win!", "Computer wins!", or "It's a tie!")
}
