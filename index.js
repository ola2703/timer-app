const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const duration = document.querySelector("#durationInput");

const timer = new Timer(duration, startBtn, pauseBtn, {
    onStart(){
        console.log('Timer started!');
    },
    onTick(){
        console.log('Timer ticked');
    }, 
    onCompleted(){
        console.log('Timer completed!');
    }
});
