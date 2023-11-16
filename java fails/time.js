function  showtime(){
    let clock=new Date();
    let hour=clock.getHours();
    let min=clock.getMinutes();
    let sec=clock.getSeconds();
    hour=pluszero(hour)
    min=pluszero(min)
    sec=pluszero(sec)
    document.getElementById("time").innerHTML=hour+":"+min+":"+sec
    // console.log(hour, min, sec);
    setTimeout(showtime, 1000);
}
function pluszero(number){
    if(number<10){
        return "0" +number
    }
    else{
        return number
    }      
}
showtime();