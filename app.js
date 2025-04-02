let timer;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
       
const second =document.querySelector('.second');
const minute=document.querySelector('.minute');
const start=document.querySelector('.start');
const stop=document.querySelector('.stop');
const reset=document.querySelector('.reset');

function updateDisp(){
second.textContent=seconds;
minute.textContent=minutes;
}

function starttime(){
  timer=setInterval(()=>{
    seconds++;
    if(seconds==60){
      seconds=0;
      minutes++;
    }
    if(minutes==60){
      minutes=0;
      hours++;
    }
    if(hours==24){
      seconds=0;
      hours=0;
      minutes=0;
    }
    updateDisp();
  },1000)
}


function stoptime(){
  clearInterval(timer);
}


function resettime(){
  seconds=0;
  minutes=0;
  hours=0;
 updateDisp()
}

start.addEventListener('click',starttime);
stop.addEventListener('click',stoptime);
reset.addEventListener('click',resettime);
