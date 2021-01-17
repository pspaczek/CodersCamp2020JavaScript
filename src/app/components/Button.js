import renderElement from '../tools/renderElement'

class Button {
  constructor(text, className) {
    this.text = text;
    this.className = className;
  };

  render() {
    const buttons = document.querySelector('.buttons')

    const button = renderElement({
      tagHTML: "button",
      className: `${this.className}`,
      innerText: `${this.text}`,
      parentElement: buttons,
    });

    return button;
  }

  
  addIcon(iconClass) {
    const icon = renderElement({
      tagHTML: "i",
      className: `${iconClass}`,
      parentElement: document.getElementsByTagName("button")[0]
    });
    return icon;
  }
};

export default Button