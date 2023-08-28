import { scheduleDay } from "./objects.js"

const time = document.getElementById("time")
const schedule = document.querySelector('.schedule')
const add = document.querySelector('.add')
const date = new Date

add.addEventListener('click', ()=>{
    console.log("Cliked")
})

time.innerText = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` 

for(var i = 0; i < 3;i++){
    schedule.innerHTML += new scheduleDay("Título testando",i).html
    
}

const schedule_day = document.querySelectorAll(".schedule-day")


schedule_day.forEach(element => {
    element.querySelector(".container").addEventListener('click', () => {
        if(element.querySelector(".list").clientHeight > 0){
            element.querySelector(".list").style.height = "0px"
        }else {
            element.querySelector(".list").style.height = "fit-content"

        }
    });
});
