// let timer = document.querySelector('.timer');
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
let displayTime = document.getElementById("getTime");
console.log(displayTime)
let timer = null;

let [msec, sec, min, hrs] = [0, 0, 0, 0];

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
 let h = hrs < 10 ? "0" + hrs : hrs
 let m = min < 10 ? "0" + min : min
 let s = sec < 10 ? "0" + sec : sec
 let ms = msec < 10 ? "0" + msec : msec

  displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function startBtn() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch,10);  
}

function stopBtn(){
    clearInterval(timer)
}
function resetBtn(){
    clearInterval(timer);
    [msec, sec, min, hrs] = [0, 0, 0, 0];
    displayTime.innerHTML = "00 : 00 : 00 : 00";
}
