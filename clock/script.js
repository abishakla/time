let amp=document.getElementById('amp');
function displayTime(){
    let dateTime=new Date();
    let date=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    if(date>12){
        date=date-12
        amp.innerHTML="PM"
    }
    else{
        amp.innerHTML="AM"
    }
    document.getElementById('hours').innerHTML= padZero(date)
    document.getElementById('minutes').innerHTML= padZero(min)
    document.getElementById('second').innerHTML= padZero(sec)



}
function padZero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,500)