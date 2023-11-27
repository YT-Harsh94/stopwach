// let timer = document.querySelector('.timer');
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
let displayTime = document.getElementById("displayTime")
let timer = null;

let min = 0;
let sec = 0;
let msec = 0;
let hrs = 0;

function stopWatch() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min == 0;
                hrs++;
            }
        }
    }
    displayTime.innerHTML = hrs +":"+ min +":"
}

function startBtn() {
    if (timer != null) {
        clearInterval(timer)
    }
    timer = setInterval(stopWatch, 1000)
}