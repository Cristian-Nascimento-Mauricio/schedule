import { add_item, item, schedule, vaoidList } from "./codeHTML.js"
import { ItemForList, MySchedule, getDate } from "./objects.js"

const buttonAddSchedule = document.querySelector(".add")
const modal = document.querySelector(".modal")
const buttonAddItem = document.querySelector(".div-button div")
const listItem = document.querySelector(".schedule-of-day-list")
var buttonTash = document.querySelectorAll(".schedule-of-day-list .add-item div img")
const canceled = document.getElementById("canceled")
const salved = document.getElementById("salved")
const listSchedule = document.querySelector('.list-schedule')

var id = 1 
modal.style.display = "none";



canceled.addEventListener('click', ()=>{
    modal.style.display = 'none'
    listItem.innerHTML = `<div class="add-item" id="0">
    <input>
    <div>
      <img src="./src/Medias/PNG/tash.png">
    </div>
    </div>`

})



salved.addEventListener('click',()=>{
    const date = new Date
    var myschedule = new MySchedule()

    myschedule.title = document.querySelector('.div-input input').value
    myschedule.id= Date.parse(date)
    listItem.querySelectorAll('.add-item').forEach(element => {
        myschedule.itens.push(new ItemForList(element.id,element.querySelector('input').value,false)
        )
    })

    document.querySelector('.div-input input').value =''
    listItem.innerHTML=vaoidList

    localStorage.setItem(myschedule.id,JSON.stringify(myschedule)) 
    
    listSchedule.innerHTML +=schedule(myschedule.id,myschedule.title,myschedule.progress)
    myschedule.itens.forEach(element =>{
        document.querySelectorAll(".list-item")[document.querySelectorAll(".list-item").length-1].innerHTML += item(element.id,element.title,element.checkout)
    })


})


fun()

buttonAddSchedule.addEventListener('click', ()=>{
    if(modal.style.display == 'none'){
        modal.style.display = 'flex'
    }else {
        modal.style.display = 'none'
    }
    console.log(modal.style.display)
})

buttonAddItem.addEventListener('click',()=>{
    listItem.innerHTML += add_item(id) 
    id++   
    fun()    
})

modal.addEventListener('click',(event)=>{
    if(event.target.className == 'modal'){
        modal.style.display = 'none'
        listItem.innerHTML = vaoidList
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