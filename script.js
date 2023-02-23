let displayPtag = document.getElementById('display-p');
let lapBtn = document.getElementById('lapBtn')
let stopBtn = document.getElementById('stopBtn')
let lapTimingData = document.getElementById('timing-data');

// on page load
stopBtn.innerText = "Start";

let str = "00:00:00";
displayPtag.innerText = str;

lapBtn.addEventListener('click',function(){
    console.log("lapBtn clicked");
    // lap-data-pTag
    let pTag = document.createElement('p');
    pTag.className = "lap-data-pTag";
    pTag.innerText = str;
    
    lapTimingData.appendChild(pTag);
});

stopBtn.addEventListener('click',function(){
    console.log(stopBtn.innerText, "console");
    if(stopBtn.innerText=="Start"){
        stopBtn.innerText = "Stop";
    }
    else{
        stopBtn.innerText = "Start";
    }
    console.log("stopBtn clicked")
});

