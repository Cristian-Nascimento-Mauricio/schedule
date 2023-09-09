// Modules to control application life and create native browser window
const { app, BrowserWindow,  ipcMain } = require('electron')
const sqlite3 = require('sqlite3');
const path = require('path');

const db = new sqlite3.Database('./src/database/database.db')

db.run('CREATE TABLE IF NOT EXISTS timeline( id INTEGER PRIMARY KEY,  title TEXT, data DATETIME DEFAULT CURRENT_TIMESTAMP )');

db.run('CREATE TABLE IF NOT EXISTS taks( id INTEGER PRIMARY KEY, title TEXT , ready  INTEGER DEFAULT 0,  timeline_id INTEGER , FOREIGN KEY(timeline_id) REFERENCES timeline(id) )');



function createWindow () {

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration:true,
      contextIsolation:false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.setMinimumSize(800,600)
  //ainWindow.setMenu(null)
  mainWindow.loadFile('./src/HTML/index.html')


}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {


    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on("create-table",(event)=>{

  db.serialize(()=>{

  db.all('SELECT * FROM taks', [], (err, rows) => {
    event.sender.send("async-ipcRender",rows)

  });

  })
  //event.sender.send("async-ipcRender","Bom dia")

})

ipcMain.on('add-Taks',(event,args)=>{

  console.log(args)
  console.log(args.title)
  args.itens.forEach(element => {
    console.log(element)
  });


  db.serialize(() => {
    db.run(`INSERT INTO timeline (title) VALUES ("${args.title}")`, function(err) {
      if (err) {
        console.error('Erro ao adicionar à timeline:', err.message);
        return;
      }
      args.itens.forEach(element =>{
        db.run(`INSERT INTO taks (title,timeline_id) VALUES ("${element}",${this.lastID})`)
      })

      console.log(this.lastID); // Imprime o ID gerado automaticamente
    });
  });

})

ipcMain.on('getTimeline',(event) =>{

  class Obj{
    
    constructor(title){
      this.title = title,
      this.itens = []
    }

  }

  var list = []


  db.serialize(()=>{
    db.all('SELECT * FROM timeline',[],(error,rows)=>{
      if (error) {
        console.error('Erro ao buscar registro:', error.message);
      } else {
        
        rows.forEach(element =>{
          var obj = new Obj(element.title)

          
          db.all(`SELECT * FROM timeline INNER JOIN taks ON ${element.id} == taks.timeline_id`,[],(error,subrows) =>{
            if (error) {
              console.error('Erro ao buscar registros:', error.message);
            } else {
             subrows.forEach(subElement =>{
              console.log(subElement.title)
             })
            }
          })
  
          list.push(obj)

        })
        console.log(list)

      }

    })

  })

})

