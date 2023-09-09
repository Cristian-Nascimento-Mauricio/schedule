const { ipcRenderer } = require('electron')
import { vaoidList } from './src/JS/codeHTML.js'
import { MySchedule } from './src/JS/objects.js'

ipcRenderer.send("create-table")


document.getElementById('salved').addEventListener('click',()=>{

    const listItem = document.querySelector(".schedule-of-day-list")
    var title = document.querySelector('.div-input input').value
    var taks = document.querySelectorAll('.add-item input')

    var schedule = new MySchedule(title)
    

    taks.forEach(element =>{
        console.log(element.value)
        schedule.itens.push(element.value)
    })
    console.log(schedule)
    

    ipcRenderer.send('add-Taks',schedule)

    listItem.innerHTML=vaoidList

})

ipcRenderer.send('getTimeline')