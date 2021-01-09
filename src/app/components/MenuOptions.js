import renderElement from '../tools/renderElement'

class MenuOptions {
  constructor() {
    this.options = ['People', 'Vehicles', 'Starships']
  }
  render() {
    const section = renderElement('section', 'options', '')
    this.options.forEach(option => {
      const optionNode = renderElement('h2', 'options__mode', option, section)
      optionNode.dataset.mode = option.toLocaleLowerCase()
    })
    return section
  }
 
  showActiveMode(e, callback) {
    if (e.target.classList.contains('options__mode')) {
      const allOptions = document.querySelectorAll('.options__mode');
      allOptions.forEach(option => option.classList.remove('options__mode--active'))
      const activeMode = e.target
      activeMode.classList.add('options__mode--active')
      callback(activeMode)
    }
  }

  changeMode(activeMode) {
    if (activeMode.dataset.mode === 'people') {
      console.log('Tryb people')
    } else if (activeMode.dataset.mode === 'vehicles') {
      console.log('Tryb vehicles')
    } else {
      console.log('Tryb starships')
    }
  }
}

const menuOptionsObj = new MenuOptions()

export default menuOptionsObj