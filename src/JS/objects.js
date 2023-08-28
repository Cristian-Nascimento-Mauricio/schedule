export class scheduleDay {

    constructor(title,id,list){
      this.title = title
      this.progress = 100
      this.id = id
      this.list = list
      this.itens = ''
      list.forEach(element => {
        this.itens += element.html
      });
       
      this.html = `
      <div class="schedule-day" id="${this.id}">
        <div class="container">
            <div class="title">
                <p>${this.title}</p>
            </div>
            <div class="progress">
              <p>${this.progress}%</p>
            </div>
        </div>
        <div class="list">
          ${this.itens}
        </div>
      </div>

    </div>
    ` 
  }

}

export class item {

  constructor(title){
    this.title = title
    this.html = `
    <div class="item">
      <input type="checkbox" >
      <p>${this.title}</p>
    </div>
    `
  }

}
