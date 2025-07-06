const dayEl=document.getElementById("day");
const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minute");
const secondEl=document.getElementById("second");

const newYear=new Date("Jan 01 2026 00:00:00");
const second=1000;
const minute=second*60;
const hour=minute*60;
const day=hour*24;

update();
function update(){
    const now=new Date();
    const gap=newYear-now;
    dayEl.textContent=Math.floor(gap/day).toString().padStart(2,"0");
    hourEl.textContent=Math.floor((gap%day)/hour).toString().padStart(2,"0");;
    minuteEl.textContent=Math.floor((gap%hour)/minute).toString().padStart(2,"0");;
    secondEl.textContent=Math.floor((gap%minute)/second).toString().padStart(2,"0");;

    setInterval(update,1000);
}