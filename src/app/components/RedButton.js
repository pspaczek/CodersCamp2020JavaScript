import renderElement from '../tools/renderElement'

class RedButton {
    constructor(text) {
        this.text = text;
    }
    render() {
//const buttonBlock generuje <button class="buttonRed"></button>

        const buttonBlock = renderElement({
            tagHTML: 'button',
            className: 'buttonRed',
            on: {
                click: this.showActiveMode
            }
        })

//teraz chcę stworzyć <span>${this.text}</span>

        const contentText = document.createElement("span");
        contentText.innerText = this.text;

//tutaj chce dołączyć powyższy element wewnatrz <button></button>

        const button = buttonBlock.appendChild(contentText);

//dodaje klasę do nowego elementu:
        button.classList.add("buttonRed__text");

//wyrzucam gotowy button
       return buttonBlock
    }
};

export default RedButton 