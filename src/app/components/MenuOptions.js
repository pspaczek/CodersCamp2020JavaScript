import renderElement from '../tools/renderElement'

class MenuOptions {
  constructor() {
    this.options = ['People', 'Vehicles', 'Starships']
  }
  render() {
    const optionsSection = renderElement({
      tagHTML:'section', 
      className:'options',
      on : {click: this.showActiveMode}
    })
    this.options.forEach((option, id) => {
      const optionElement = renderElement({
        tagHTML:'span', 
        className:'options__mode', 
        innerText: option, 
        parentElement: optionsSection,
        attr: {'data-mode' : option.toLowerCase()}
      })
      if (id === 0) {
        optionElement.classList.add('options__mode--active')
      }
    })
    return optionsSection
  }
 
  showActiveMode(e) {
    if (e.target.classList.contains('options__mode')) {
      const allOptions = document.querySelectorAll('.options__mode');
      allOptions.forEach(option => option.classList.remove('options__mode--active'))
      const activeMode = e.target
      activeMode.classList.add('options__mode--active')
      return activeMode.dataset.mode
    }
  }
}

export default MenuOptions