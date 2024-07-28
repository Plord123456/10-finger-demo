let words = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
    "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry",
    "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yam", "zucchini",
    "avocado", "blueberry", "coconut", "dragonfruit", "eggplant", "grapefruit", "huckleberry",
    "jackfruit", "kumquat", "lime", "mandarin", "nectar", "olive", "peach", "plum",
    "pomegranate", "quinoa", "rhubarb", "spinach", "tomato", "ube", "valencia", "walnut",
    "yellowfin", "zest"
];

let index = Math.floor(Math.random() * words.length);
let title = document.getElementById("title") ;
let inputField = document.getElementById("input-field");
let scoreDisplay = document.getElementById("score");
let timerDisplay = document.getElementById("timer");
let restartButton = document.getElementById("restart-btn");

let point = 0;
let timer = 1000;
let interval;

title.innerText = words[index];

inputField.addEventListener("input", function () {
    if (inputField.value.trim() === words[index]) {
        point++;
        resetGame();
    }
});

restartButton.addEventListener("click", resetGame);

function resetGame() {
    index = Math.floor(Math.random() * words.length);
    title.innerText = words[index];
    inputField.value = '';
    scoreDisplay.innerText = `Score: ${point}`;
    resetTimer();
}

function resetTimer() {
    clearInterval(interval);
    timer = 1000;
    timerDisplay.innerText = `Time left: ${timer}`;
    interval = setInterval(() => {
        timer--;
        timerDisplay.innerText = `Time left: ${timer}`;
        if (timer === 0) {
            clearInterval(interval);
            point--;
            scoreDisplay.innerText = `Score: ${point}`;
            resetGame();
        }
    }, 1000);
}

document.addEventListener("keydown", function (event) {
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (key) {
        key.classList.add("active");
    }
});

document.addEventListener("keyup", function (event) {
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (key) {
        key.classList.remove("active");
    }
});

resetGame();

