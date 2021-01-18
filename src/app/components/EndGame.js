import renderElement from '../tools/renderElement';

class ModalContent {
  /*constructor(humanAnswers, computerAnswers) {
    this.humanAnswers = humanAnswers;
    this.computerAnswers = computerAnswers;
  }*/
  render() {
    const wrapper = renderElement({
      tagHTML: 'div',
      className: 'modal',
      //eventListener?
    });
    renderElement({
      tagHTML: 'h2',
      className: 'modal__heading',
      innerText: 'GAME OVER',
      parentElement: wrapper,
    });
    renderElement({
      tagHTML: 'span',
      className: 'modal__text',
      innerText: `The force is strong in you young Padawan! 
      During 1 minute you have answered ${``}
     and computer guessed ${``}`,
      parentElement: wrapper
    });
    renderElement({
      tagHTML: "button",
      className: 'button button--red modal__button',
      innerText: `May the force be with you`,
      parentElement: wrapper,
    });
  }
  
}
export default ModalContent;