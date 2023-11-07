document.addEventListener("DOMContentLoaded", function () {
    const magicBallImage = document.getElementById("magic-ball-image");

    magicBallImage.addEventListener("click", function () {
        const userQuestion = prompt("Поставте питання:");
        provideAnswer(userQuestion);
    });

    function provideAnswer(question) {
        if (question) {
            const answers = ["Так", "Ні"];
            const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
            alert(`Магічна куля відповідає: ${randomAnswer}`);
        }
    }
});
