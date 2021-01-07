import renderAndAppendElement from '../tools/render'

class MenuOptions {
  constructor() {
    this.options = ['People', 'Vehicles', 'Starships']
  }
  renderMenuOptions() {
    const div = renderAndAppendElement('section', 'options', '')
    this.options.forEach(option => {
      renderAndAppendElement('h2', 'options__mode', option, div)
    })
  }
 
  showActiveMode() {
    
  }
}

export default MenuOptions