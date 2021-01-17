import renderElement from '../tools/renderElement'

class ButtonSection {
  constructor() {};

  render() {
    const buttonSection = renderElement({
      tagHTML: 'section',
      className: 'buttons',
    })

    return buttonSection;
  }
}

export default ButtonSection;