const bankAccount = {
    ownerName: "Ruslan",
    accountNumber: 124,
    balance: 9644,
    deposit: function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Ви поповнили рахунок на ${amount} грн. Поточний баланс: ${this.balance} грн.`);
        } else {
            console.log("Сума поповнення має бути більше 0.");
        }
    },
    withdraw: function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Ви зняли ${amount} грн. Поточний баланс: ${this.balance} грн.`);
        } else {
            console.log("Недостатньо коштів на рахунку або сума зняття некоректна.");
        }
    }
};

const depositPrompt = prompt("Добрий день, введіть + якщо хочете положити кошти на рахунок, та - щоб зняти.");

if (depositPrompt == "+") {
    const depositMoney = Number(prompt(`Введіть сумму депозиту`));
    bankAccount.deposit(depositMoney);
} else if (depositPrompt == "-") {
    const withdrawMoney = Number(prompt(`Введіть сумму зняття`));
    bankAccount.withdraw(withdrawMoney);
} else {
    console.log("Невірний вибір. Введіть + або -.");
}


const weather = {
    temperature: 41,
    humidity: 15,
    windSpeed: 10,
    temperatureCheck: function (temperature) {
        if (temperature < 0) {
            return true;
        } else if (temperature >= 0) {
            return false;
        }
    }
}

const weatherPrompt = parseFloat(prompt("Введіть температуру"));

if (isNaN(weatherPrompt)) {
    console.log("Ви ввели не число");
} else if (weather.temperatureCheck(weatherPrompt)) {
    console.log("Температура нижче 0 градусів Цельсія");
} else {
    console.log("Температура більше або дорівнює 0 градусів Цельсія");
}

const user = {
    name: 'Zitraks',
    email: 'gdsfsddsfd@proton.me',
    password: 'zxccxzz',
    login: function () {
        if (this.email.includes("@") && this.email.includes(".") && this.password.length >= 8) {
            alert("Введені данні підлягають реєстрації");
        } else {
            alert("{Можливо в пошті немає @ та крапки, або пароль менше 8 символів");
        }
    }
}

console.log(user)
user.login();

const movieRating = parseFloat(prompt(`Поставте оцінку фільму Месники`));

const movie = {
    title: "Месники",
    director: 'Zitraks',
    year: 2010,
    rating: [movieRating],
    ratingValidation: function () {
        if (movieRating > 8) {
            alert("Рейтинг більше 8")
        } else if (movieRating <= 8) {
            alert("Рейтинг менше або дорівнює 8")
        } else {
            alert("Ви ввели не число")
        }
    }
}

movie.ratingValidation();