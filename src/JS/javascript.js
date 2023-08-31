import { item, schedule } from "./codeHTML.js"

const time = document.getElementById("time")
const listSchedule = document.querySelector('.list-schedule')
const menuBar = document.querySelector('.menu-bar-button')


let list = []

Object.keys(localStorage).forEach(key=>{
    let myschedule = JSON.parse(localStorage.getItem(key))
    list.push(myschedule)
    console.log(myschedule)
})

list.forEach(element => {
    listSchedule.innerHTML += schedule(element.id,element.title,element.progress)
    element.itens.forEach(subElement =>{
        document.querySelectorAll(".list-item")[document.querySelectorAll(".list-item").length-1].innerHTML += item(subElement.id,subElement.title,subElement.checkout)
    })
})

listSchedule.querySelectorAll(".schedule .container").forEach(element =>{
    element.addEventListener('click', (event)=>{
        var id 
        if(event.target.className == ''){
            id = event.target.parentNode.parentNode.parentNode.id
        } else {
            id = event.target.parentNode.parentNode.id
        } 
        //console.log(id)

        const close = document.getElementById(id)


        if(close.querySelector('.list-item').style.height != 'fit-content'){
            close.querySelector('.list-item').style.height = 'fit-content'
        }else {
            close.querySelector('.list-item').style.height = '0px'
        }
   
    })
})

document.querySelectorAll("input[type='checkbox']").forEach(element => {
    element.addEventListener('click',(event)=>{
        //console.log( event.target.parentNode.parentNode.parentNode.id )
        event.target.parentNode.parentNode.parentNode.querySelector(".container .progress p").innerText = "100%"
        var checkbox = event.target.parentNode.parentNode.querySelectorAll(".item input[type='checkbox']").length
        var checkboxTrue = 0
        event.target.parentNode.parentNode.querySelectorAll(".item input[type='checkbox']").forEach(element =>{
            checkboxTrue += element.checked ? 1 :  0
        })
        event.target.parentNode.parentNode.parentNode.querySelector(".container .progress p").innerText = `${ Math.round( (checkboxTrue / checkbox)*100 )}%`

        let obj = list.filter( (object) => object.id == event.target.parentNode.parentNode.parentNode.id )[0]
        obj.progress = Math.round( (checkboxTrue / checkbox)*100 )
        obj.itens.filter( (object) => object.id == event.target.parentNode.id)[0].checkout = event.target.checked
        console.log(obj)
        localStorage.setItem(obj.id, JSON.stringify( obj ))
        console.log( JSON.parse( localStorage.getItem(obj.id) ) )

    })
})

menuBar.addEventListener('click',()=>{
    console.log(document.querySelector('.menu').style.display)

    if(document.querySelector('.menu').style.display == 'none'){
        document.querySelector('.menu').style.display = 'flex'
    } else {
        document.querySelector('.menu').style.display = 'none'
    }
})


const date = new Date

time.innerText = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` // get days, month and year now and set time <p> 



