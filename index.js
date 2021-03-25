class Timer {
    constructor(duration, startButton, pauseButton){
        this.duration = duration;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }

    start = ()=>{
        this.sth();
    }
    sth(){
        alert("IMPORTANT");
    }
}

const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const duration = document.querySelector("#durationInput");

const timer = new Timer(duration, startBtn, pauseBtn);
timer.sth();