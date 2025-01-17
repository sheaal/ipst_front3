function game(playerChoice) {
    return new Promise((resolve, reject) => {
        const choices = ["Камень", "Ножницы", "Бумага"];

        if (!choices.includes(playerChoice)) {
            return reject(new Error("Неверный выбор! Пожалуйста, выберите 'Камень', 'Ножницы' или 'Бумага'."));
        }

        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        let result;
        if (playerChoice === computerChoice) {
            result = "Ничья!";
        } else if (
            (playerChoice === "Камень" && computerChoice === "Ножницы") ||
            (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
            (playerChoice === "Бумага" && computerChoice === "Камень")
        ) {
            result = "Вы победили!";
        } else {
            result = "Компьютер победил!";
        }

        resolve({
            playerChoice: playerChoice,
            computerChoice: computerChoice,
            result: result,
        });
    });
}


game("Камень")
    .then(gameResult => {
        console.log(gameResult);
    })
    .catch(error => {
        console.error(error.message);
    });
