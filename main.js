const dog = document.getElementById("dog");
const fh = document.getElementById("fh");
const btn = document.getElementById("btn");
const cloud_1 = document.getElementById("cloud_1")
const cloud_2 = document.getElementById("cloud_2")
const timer = document.getElementById('stopwatch');

//stopwatch
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

//start
function startTimer() {
    if (stoptime == true) {
          stoptime = false;
          timerCycle();
      }
}
function start(){
    fh.classList.add("fh_move")
    cloud_1.classList.add("cloud1_move")
    cloud_2.classList.add("cloud2_move")
    startTimer();
}

//jump
function jump(){
    if(dog.classList != "jump"){
        dog.classList.add("jump");

        setTimeout(function (){
        dog.classList.remove("jump");
        }, 600)
    }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        jump();
    }
}

//game over
let isAlive = setInterval(function (){
    let dogTop = parseInt(window.getComputedStyle(dog).getPropertyValue("top"));
    let fhLeft = parseInt(window.getComputedStyle(fh).getPropertyValue("left"));

    if(fhLeft <110 && fhLeft > 0 && dogTop >= 170){
        alert("Game Over");
        location.reload();
        if (stoptime == false) {
            stoptime = true;
        }
        resetTimer();
    }

}, 10)