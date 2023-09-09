import { setLanguage } from "./objects.js"

const menuBar = document.querySelector('.menu-bar-button')
const languges = document.querySelectorAll('.select-language div')

setLanguage()


languges.forEach(element =>{
    element.addEventListener('click',(event)=>{
        
        if(event.target.className == 'portuguese' || event.target.className == 'english' || event.target.className == 'japanese' || event.target.className == 'spanish' ){
            console.log(event.target.className)
        }else {
            console.log(event.target.parentNode.className)
        }
    })
})
