// const buttons=document.querySelector('.buttons');
const buttonStart=document.querySelector('.start');
const buttonStop=document.querySelector('.stop');
const buttonReset=document.querySelector('.reset');
const time=document.querySelector('.time');

// console.log(button);


let timer;
let seconds=0; 
let minutes=0;
let hours=0;
let microSeconds=0
let isrunnign=false


function sratTime(){
    microSeconds++;
    if(microSeconds===100){
        microSeconds=0;
        seconds++;
    }
        if(seconds===60){
            seconds=0;
            minutes++;
       }
       if(minutes===60){
        minutes=0;
        hours++;
       }
       
    time.textContent=`${hours}:${minutes}:${seconds}.${microSeconds}`;

}
buttonStart.addEventListener('click',function(){
    if (!isrunnign) {
        timer = setInterval(sratTime , 10); 
        isrunnign = true;
    }
});

buttonStop.addEventListener('click',function(){
   clearInterval(timer);
});
buttonReset.addEventListener('click',function(){
    clearInterval(timer);
    isrunnign = false;
   
    seconds = 0;
    minutes = 0;
    hours = 0;
    microSeconds = 0;
    time.textContent = '0:0:0.0';
});
