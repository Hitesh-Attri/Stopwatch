let displayPtag = document.getElementById('display-p');
let lapBtn = document.getElementById('lapBtn')
let stopBtn = document.getElementById('stopBtn')
let lapTimingData = document.getElementById('timing-data');

// on page load
let hours = 0;
let minutes = 0;
let seconds = 0;
let milSec = 0;

let hStr = "";
let mStr = "";
let sStr = "";
let milSecStr = "";

let id;

stopBtn.innerText = "Start";
lapBtn.disabled = true;
let isRunning = false;
let isLap = true;

// temp str
let str = "00 : 00 : 00";

displayPtag.innerText = str;

lapBtn.addEventListener('click',function(){
    if(!isLap){
        alert("reset");
        lapTimingData.innerHTML="";
        str="00 : 00 : 00";
        stopStopWatch();
    }
    else{
        console.log("lapBtn clicked");

        // add here the code to make str equal to current timing


        let pTag = document.createElement('p');
        pTag.className = "lap-data-pTag";
        pTag.innerText = str;
        
        lapTimingData.appendChild(pTag);
    }
});

stopBtn.addEventListener('click',function(){

    if(!isRunning){
        // add below the code to make stopwatch RUNNING

        timer();

        //
        
        isRunning = true;
        lapBtn.disabled = false;

        console.log(stopBtn.innerText, "console");
        // if(stopBtn.innerText=="Start"){
            stopBtn.innerText = "Stop";
        // }
        lapBtn.innerText = "Lap";
        isLap = true;
    }
    else{
        // below the code to make the stopwatch STOP

        stopStopWatch();

        //

        isRunning=false;
        // lapBtn.disabled = true;
        stopBtn.innerText = "Start";
        lapBtn.innerText = "Reset";
        isLap = false;
    }
    console.log("stopBtn clicked")
});

// function startStopWatch(){

// }

function stopStopWatch(){
    clearInterval(id);
}

function timer(){

    hours = parseInt(hours);
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);
    milSec = parseInt(milSec);

    seconds += 1;

    if(seconds==60){
        seconds = 0;
        minutes+= 1;
    }
    if(minutes == 60){
        minutes = 0;
        hours += 1;
    }
    if(hours<10){
        hStr = "0"+hours;
    }
    if(minutes<10){
        mStr = "0"+minutes;
    }
    if(seconds<10){
        sStr = "0"+seconds;
    }
    str = hStr + " : " + mStr + " : " + sStr;
    displayPtag.innerText = str;
    id = setTimeout(timer,1000);
}   