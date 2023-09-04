const menuBar = document.querySelector('.menu-bar-button')
const languges = document.querySelectorAll('.select-language div')

languges.forEach(element =>{
    element.addEventListener('click',(event)=>{
        
        if(event.target.className == 'portuguese' || event.target.className == 'english' || event.target.className == 'japanese' || event.target.className == 'spanish' ){
            console.log(event.target.className)
        }else {
            console.log(event.target.parentNode.className)
        }
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
