
function countdown(){
    let currenttime=new Date();
    let mybirthday =new Date("june 11, 2022 ,00:00:00");
    let diff =mybirthday -currenttime;
    let textday =Math.floor(diff/1000 /60/60/24),
    texthour=Math.floor((diff/1000/60/60 )%24),
    textminute=Math.floor((diff/1000/60)%60),
    textsecond=Math.floor((diff /1000)%60);
    document.querySelector('.dayy').innerHTML =textday;
    document.querySelector('.hourr').innerHTML =texthour;
    document.querySelector('.minutee').innerHTML =textminute;
    document.querySelector('.secondd').innerHTML =textsecond;



}
setInterval(countdown,1000);


