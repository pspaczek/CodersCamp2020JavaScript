import renderElement from '../tools/renderElement'

class Button {
    constructor (text, className) {
      this.text = text;
      this.className = className;
    };
    
    render() {
      const button = renderElement({
        tagHTML: "button",
        className: `${this.className}`,
        innerText: `${this.text}`
     });
  
      return button;
    }
  };

export default Button 