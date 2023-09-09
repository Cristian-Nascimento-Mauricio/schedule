export const vaoidList = `
<div class="add-item" id="0">
    <input>
    <div>
        <img src="../Medias/PNG/tash.png">
    </div>
</div>
`
export function add_item(id){
    return `
<div class="add-item" id="${id}">
    <input>
    <div>
        <img src="../Medias/PNG/tash.png">
    </div> 
</div>
`
}
export function schedule(title){
    return `
    <div class="schedule" >
        <label for="">
            <div class="container">
                <div class="title">
                    <p>${title}</p>
                </div>
                <div class="progress">
                    <p>0%</p>
                </div>
                <div class="tash">
                    <img src="../Medias/PNG/tash.png" >
                </div>
            </div>

        </label>
        <input type="checkbox" class="checkbox-open-list" id="${id/2}"}> 

        <div class="list-item">

        </div>
    </div>
    `
}

export function item(id,title,checked){
    return`
    <div class="item" id="${id}">
        <input type="checkbox" class="item-checkbox" ${checked ? "checked":""}>
        <p>${title}</p>
    </div>
    `
}