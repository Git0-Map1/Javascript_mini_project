let secondElapsed = 0;
let interval = null;

const elem = document.getElementById("elem");

function padStart(value){
    return String(value).padStart(2,"0")
}
function setTime(){
    const minutes = Math.floor(secondElapsed/60);
    const seconds = secondElapsed % 60;
    elem.innerHTML=`${padStart(minutes)}:${padStart(seconds)}`;  
}
function timer(){
    secondElapsed++;
    setTime()
}
function start(){
    if(interval) stop()
    interval = setInterval(timer,1000)

}
function stop(){
    clearInterval(interval)
}
function reset(){
    stop()
    secondElapsed = 0;
    setTime()
}

