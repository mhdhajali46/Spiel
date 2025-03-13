let randomNumber;
let upperLimit = 100;
let tries = 0;

function startGuessNumbers() {
    randomNumber = ((Math.random() * upperLimit) + 1);
    randomNumber = Math.ceil(randomNumber);
    document.getElementById("game-text2").innerText = "Rate eine Zahl zwischen 1 und 100!";
    
    document.getElementById("input").value = "";
}

function checkInput() {
    if (randomNumber == null) {
        return false;
    }

    guessedNumber = (document.getElementById("input").value);
    tries++;

    if (guessedNumber < 1 || guessedNumber > 100 || isNaN(guessedNumber)) {
        document.getElementById("game-text2").innerText = "Bitte gib eine Zahl zwischen 1 und 100 ein!";
        return false;
    }

    if (guessedNumber > randomNumber) {
        document.getElementById("game-text2").innerText = "Zu hoch! Versuche es erneut.";
    } else if (guessedNumber < randomNumber) {
        document.getElementById("game-text2").innerText = "Zu niedrig! Versuche es erneut.";
    } else {
        document.getElementById("game-text2").innerText = `Richtig geraten! Du hast ${tries} Versuche gebraucht.`;
    }

    return false;
}
