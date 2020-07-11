var minute=0;
var second=0;
var millisecond=0;

var minheading=document.getElementById("min");
var secondheading=document.getElementById("sec");
var millisecondheading=document.getElementById("mil");
var interval;
function timer(){
    millisecond++;
    millisecondheading.innerHTML=millisecond;
    if (millisecond>=99){
        second++;
        secondheading.innerHTML=second;
        millisecond=0;
    }
    else if (second>=59){
        minute++;
        minheading.innerHTML=minute;
        second=0
    }
}
function start(){
interval=setInterval(timer,10);
document.getElementById("submit").disabled=true;
}
function stop(){
    clearInterval(interval);
    document.getElementById("submit").disabled=false;
}
function reset(){
    record.innerHTML+= minute + ":" + second + "." + millisecond + "<br>";
    
    minute=0;
    second=0;
    millisecond=0;
    millisecondheading.innerHTML="00";
    minheading.innerHTML="00";
    secondheading.innerHTML="00";
    clearInterval(interval)
    document.getElementById("submit").disabled=false;

}

