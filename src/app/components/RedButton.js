import renderElement from '../tools/renderElement'

class RedButton {
    constructor(text) {
        this.text = text;
    }
    render() {
        const buttonBlock = renderElement({
            tagHTML: 'button',
            className: 'buttonRed',
            on: {
                click: this.showActiveMode
            }
        })

        const contentText = document.createElement("span");
        contentText.innerText = this.text;

        const button =
            buttonBlock.appendChild(contentText);
        button.classList.add("buttonRed__text");
       return "Button added"
    }
};

export default RedButton