import { item, scheduleDay } from "./objects.js"

const time = document.getElementById("time")
const schedule = document.querySelector('.schedule')
const button = document.querySelector(".div-button")
let arrayList = []

setDate()

button.addEventListener('click',()=>{
    document.querySelector('.schedule-of-day-list').innerHTML += '<div></div>'
    console.log("Cliked")
})

for(var i = 0; i < 3;i++){
    arrayList.push(new scheduleDay("Título testando",i,[ new item("texto"),new item("Outro texto"), new item("Mais texto") ]))
}

arrayList.forEach(element => {
    schedule.innerHTML += element.html
})

document.querySelectorAll(".item input").forEach(element => {
    element.addEventListener('click',  ()=>{

    var valor = 0

    element.parentElement.parentElement.querySelectorAll(".item input").forEach(subelement =>{
        valor += subelement.checked ? 1:0

        element.parentElement.parentElement.parentElement.querySelector(".container .progress p").innerHTML = (Math.round( (valor / element.parentElement.parentElement.querySelectorAll(".item").length)*100) + "%")
    })
    })
})

function setDate(){
    const date = new Date

    time.innerText = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` 

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
