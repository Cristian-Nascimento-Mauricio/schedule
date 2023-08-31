export function MySchedule(title,id) {
  this.title = title
  this.id = id
  this.itens = []
  this.progress = 0

};

export function ItemForList(id,title) {
  this.id = id
  this.title = title
  this.checkout = false

}

export function getDate() {
    const now = new Date()

    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`

}