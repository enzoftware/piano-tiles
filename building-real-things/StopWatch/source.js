const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
let interval;
let isRunning = false;
let timerTime = 0;



function startTimer() {
    if (isRunning) return;

    isRunning = true;
    interval = setInterval(incrementTime, 1000);
}

function stopTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
}

function incrementTime() {
    timerTime++;
    const numSeconds = timerTime % 60;
    const numMinutes = Math.floor(timerTime / 60);
    seconds.innerText = pad(numSeconds);
    minutes.innerText = pad(numMinutes);
    console.log({ numMinutes, numSeconds })
}

function pad(number) {
    if (number < 10) return '0' + number;
    else return number;
}