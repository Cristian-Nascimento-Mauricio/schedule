export class scheduleDay {

    constructor(title,id){
        this.title = title
        this.progress = 100
        this.id = id
        this.list = []
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
            <div class="item">
            <input type="checkbox">
            <p>Texto generico</p>
            </div><div class="item">
            <input type="checkbox">
            <p>Texto generico</p>
            </div><div class="item">
            <input type="checkbox">
            <p>Texto generico</p>
          </div>
          </div>
        </div>

      </div>
        `

    }

}

