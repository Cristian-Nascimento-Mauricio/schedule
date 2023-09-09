import { add_item, item, schedule, vaoidList } from "./codeHTML.js"
import { ItemForList, MySchedule, getDate, updateListSchedule } from "./objects.js"

const buttonAddSchedule = document.querySelector(".add")
const modal = document.querySelector(".modal")
const buttonAddItem = document.querySelector(".div-button div")
const listItem = document.querySelector(".schedule-of-day-list")
var buttonTash = document.querySelectorAll(".schedule-of-day-list .add-item div img")
const canceled = document.getElementById("canceled")
const salved = document.getElementById("salved")
const listSchedule = document.querySelector('.list-schedule')

var id = 1 

canceled.addEventListener('click', ()=>{
    listItem.innerHTML = `<div class="add-item" id="0">
    <input>
    <div>
      <img src="../Medias/PNG/tash.png">
    </div>
    </div>`

})



salved.addEventListener('click',()=>{

    
    updateListSchedule()
    document.getElementById('checkbox-open-modal').click()

})


fun()


buttonAddItem.addEventListener('click',()=>{
    listItem.innerHTML += add_item(id) 
    id++   
    fun()    
})

modal.addEventListener('click',(event)=>{
    if(event.target.className == 'modal'){
        document.getElementById('checkbox-open-modal').click()
    }
})

function fun(){
    buttonTash = document.querySelectorAll(".schedule-of-day-list .add-item div img")

    buttonTash.forEach(element => {
        element.addEventListener('click',(event)=>{
            console.log(event.target.parentElement.parentElement.id)
            listItem.removeChild(document.getElementById(event.target.parentElement.parentElement.id))
        })
    })
    
}