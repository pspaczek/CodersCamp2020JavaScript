import renderElement from '../tools/renderElement'

class MenuOptions {
  constructor() {
    this.options = ['People', 'Vehicles', 'Starships']
  }
  render() {
    const optionsSection = renderElement('section', 'options')
    this.options.forEach((option, id) => {
      const optionElement = renderElement('h2', 'options__mode', option, optionsSection)
      optionElement.dataset.mode = option.toLowerCase()
      if (id === 0) {
        optionElement.classList.add('options__mode--active')
        this.changeMode(optionElement)
      }
    })
    return optionsSection
  }
 
  showActiveMode(e, callback) {
    if (e.target.classList.contains('options__mode')) {
      const allOptions = document.querySelectorAll('.options__mode');
      allOptions.forEach(option => option.classList.remove('options__mode--active'))
      const activeMode = e.target
      activeMode.classList.add('options__mode--active')
      callback(activeMode.dataset.mode)
    }
  }

  changeMode(activeMode) {
    if (activeMode === 'people') {
      console.log('Tryb people')
      return 'people'
    } else if (activeMode === 'vehicles') {
      console.log('Tryb vehicles')
      return 'vehicles'
    } else {
      console.log('Tryb starships')
      return 'starships'
    }
  }
}

const menuOptionsObj = new MenuOptions()

export default menuOptionsObj