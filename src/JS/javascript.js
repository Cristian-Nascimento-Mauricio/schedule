import { setLanguage, updateListSchedule } from "./objects.js"

const time = document.getElementById("time")

setLanguage()

updateListSchedule()

const date = new Date

time.innerText = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` // get days, month and year now and set time <p> 

