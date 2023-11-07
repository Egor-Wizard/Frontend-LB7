document.addEventListener("DOMContentLoaded", function () {
    const magicBallImage = document.getElementById("magic-ball-image");

    magicBallImage.addEventListener("click", function () {
        const userQuestion = prompt("Задайте питання:");
        provideAnswer(userQuestion);
    });

    function provideAnswer(question) {
        if (question) {
            const answers = ["Yes", "No"];
            const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
            alert(`Магічна куля відповідає: ${randomAnswer}`);
        }
    }
});
