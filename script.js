let timer;
let running = false;
let startTime = 0;
let elapsedTime = 0;

function startStop() {
    if (running) {
        clearInterval(timer);
        running = false;
        document.getElementById("startStopBtn").textContent = "Start";
    } else {
        running = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
        document.getElementById("startStopBtn").textContent = "Pause";
    }
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    const totalMilliseconds = Math.floor((elapsedTime % 1000) / 10); 
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("display").textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(totalMilliseconds).padStart(2, '0')}`;
}

function reset() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00.00";
    document.getElementById("startStopBtn").textContent = "Start";
    document.getElementById("lapsList").innerHTML = "";
}

function recordLap() {
    if (running) {
        const lapTime = document.getElementById("display").textContent;
        const lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        document.getElementById("lapsList").appendChild(lapItem);
    }
}
