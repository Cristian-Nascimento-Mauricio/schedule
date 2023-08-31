export const vaoidList = `
<div class="add-item" id="0">
    <input>
    <div>
        <img src="./src/Medias/PNG/tash.png">
    </div>
</div>
`
export function add_item(id){
    return `
<div class="add-item" id="${id}">
    <input>
    <div>
        <img src="./src/Medias/PNG/tash.png">
    </div> 
</div>
`
}
export function schedule(id,title,progress){
    return `
    <div class="schedule" id="${id}">
        <div class="container">
            <div class="title">
                <p>${title}</p>
            </div>
            <div class="progress">
                <p>${progress}%</p>
            </div>
        </div>
        <div class="list-item">

        </div>
    </div>
    `
}

export function item(id,title,checked){
    return`
    <div class="item" id="${id}">
        <input type="checkbox" ${checked ? "checked":""}>
        <p>${title}</p>
    </div>
    `
}