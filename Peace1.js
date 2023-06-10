let timerTextEl = document.getElementById("timerText");
let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");


let secondsLeft = 0;
let timerCompletedText = "Your moment is complete";
let timerId;

function clearrPre() {
    clearInterval(timerId);

}
twentySecondsBtnEl.onclick = function() {
    secondsLeft = 20;
    clearrPre();
    setTimerA();
};
thirtySecondsBtnEl.onclick = function() {
    secondsLeft = 30;
    clearrPre();
    setTimerA();
};
fortySecondsBtnEl.onclick = function() {
    secondsLeft = 40;
    clearrPre();
    setTimerA();
};
oneMinuteBtnEl.onclick = function() {
    secondsLeft = 60;
    clearrPre();
    setTimerA();
};

function setTimerA() {
    timerTextEl.textContent = secondsLeft + "seconds left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerTextEl.textContent = secondsLeft + "seconds left";

    } else {
        clearrPre();
        timerTextEl.textContent = timerCompletedText;
    }
}
