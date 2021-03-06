class Timer {
    constructor(duration, startButton, pauseButton, callbacks){
        this.duration = duration;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onCompleted = callbacks.onCompleted;
        }
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.stop);
    }

    start = ()=>{
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        
        this.tick();
        this.intervalId = setInterval(this.tick, 50);
    }
    
    stop = ()=>{

        clearInterval(this.intervalId);
    }
    
    tick = () =>{
        if(this.timeRemaining === 0){
            if(this.onCompleted){
                this.onCompleted();
            }
            clearInterval(this.intervalId);
        }else{
            this.timeRemaining = this.timeRemaining -0.05;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
           
        }
       
    }

    get timeRemaining (){
        return parseFloat(this.duration.value);
    }

    set timeRemaining(time){
        this.duration.value= time.toFixed(2);
    }
}