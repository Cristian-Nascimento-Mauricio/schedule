
export function MySchedule(title) {
  this.title = title
  this.itens = []

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

export function updateListSchedule(){
  const listSchedule = document.querySelector('.list-schedule')
  listSchedule.innerHTML = ''

  let list = []
  

}

export function setLanguage(){
  const language = 'pt-br'

  fetch('../JSON/languages.json').then(response => response.json())
  .then(data => {
    console.log(data.menu)
    //cofinging languague of menu 
    document.getElementById('item-menu-main').querySelector('p').innerText = data[language].menu['item-menu-main']
    document.getElementById('item-menu-settings').querySelector('p').innerText = data[language].menu['item-menu-settings']
    document.getElementById('item-menu-statics').querySelector('p').innerText = data[language].menu['item-menu-statics']

    if(document.location.pathname.split('/').pop().replace('.html', '')  == 'settings'){
      //dark-screen
      
      document.getElementById('dark-screen')
        .querySelector('h5').innerText = data[language].pages.settings['dark-screen-title']
      
      document.getElementById('dark-screen')
        .querySelector('p').innerText = data[language].pages.settings['dark-screen-description']  

      //reset-localStorege
      document.getElementById('reset-localStorage')
        .querySelector('h5').innerText = data[language].pages.settings['reset-localStorage-title']

      document.getElementById('reset-localStorage')
        .querySelector('p').innerText = data[language].pages.settings['reset-localStorage-description']

        document.getElementById('reset-localStorage')
        .querySelector('button').innerText = data[language].pages.settings['reset-localStorage-button']  

      //select a language
      document.getElementById('select-language')
        .querySelector('label p') .innerText = data[language].pages.settings['select-language-title']

      document.getElementById('select-language')
        .querySelector('.list-languages .portuguese p') .innerText = data[language].pages.settings['select-language-portuguese']  

      document.getElementById('select-language')
        .querySelector('.list-languages .english p') .innerText = data[language].pages.settings['select-language-english']  

      document.getElementById('select-language')
        .querySelector('.list-languages .japanese p') .innerText = data[language].pages.settings['select-language-japanese']  

      document.getElementById('select-language')
        .querySelector('.list-languages .spanish p') .innerText = data[language].pages.settings['select-language-spanish']  

       
    }else if(document.location.pathname.split('/').pop().replace('.html', '')  == 'index'){
      document.getElementById('canceled')
        .querySelector('p').innerText = data[language].pages.index['canceled']
      
      document.getElementById('salved')
        .querySelector('p').innerText = data[language].pages.index['salved']  

    }
      
    
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
}