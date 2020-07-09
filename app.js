var min = 0; 
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec")
var interval;

function clock() {
    msec++
    msecHeading.innerHTML = msec;
    if ( msec >= 100) {
        sec++
        secHeading.innerHTML=sec;
        msec = 0;
    }else if (sec >= 60) {
        min++
        minHeading.innerHTML= min;
        sec = 0;
    }
}



function start() {
    interval = setInterval(clock , 10) 
   document.getElementById("disable").disabled = true;
   
}
// function DOAnimation() {
    
//     var targetElement = document.getElementById("mainBox");
//       targetElement.className = "rotate";
// }
// function myFunction() {
//     start();
//     DOAnimation();
// }

function pause() {
    clearInterval(interval);
    document.getElementById("disable").disabled = false;
}



function Resert() {
    min = 0; 
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    pause()
    document.getElementById("disable").disabled = false;
   
}    


