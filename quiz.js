// Function to check the answer and provide feedback
function checkAnswer() {
    // The correct answer for the quiz
    const correctAnswer = "4";

    // Get the selected answer from the radio buttons
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Get the feedback element to display the result
    const feedbackElement = document.getElementById('feedback');

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
