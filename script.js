document.addEventListener("DOMContentLoaded", function () {
    const magicBallImage = document.getElementById("magic-ball-image");
    const magicBall = document.querySelector(".magic-ball");

    magicBallImage.addEventListener("click", function () {
        const userQuestion = prompt("Задайте питання:");
        provideAnswer(userQuestion);
    });

    function provideAnswer(question) {
        if (question) {
            // Додайте клас з анімацією під час введення питання
            magicBall.classList.add("shake");

            const answers = ["Так", "Ні", "Не знаю", "Можливо, так, а може, й ні", "Ні, я не вважаю так"];
            const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
            
            setTimeout(function () {
                alert(`Магічна куля відповідає: ${randomAnswer}`);
                // Видаліть клас анімації після відповіді
                magicBall.classList.remove("shake");
            }, 500); // Час анімації 0.5 секунди
        }
    }
});
