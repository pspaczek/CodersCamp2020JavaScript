import { wrap } from 'regenerator-runtime';
import renderElement from '../tools/renderElement';

class ModalContent {
  constructor() {
    this.humanAnswers = JSON.parse(localStorage.getItem('humAns')) || [];
    this.computerAnswers = JSON.parse(localStorage.getItem('comAns')) || [];
  }
  render() {
    const app = document.querySelector('.app');
    const wrapper = renderElement({
      tagHTML: 'div',
      className: 'modal',
      parentElement: app,
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
      parentElement: wrapper,
    });
    const results = renderElement({
      tagHTML: 'section',
      className: 'modal__results',
      parentElement: wrapper,
    });
    this.humanAnswers.forEach((element) => {
      const resultsLine = renderElement({
        tagHTML: 'div',
        className: 'modal__result',
        parentElement: results,
      });
      const {
        newId,
        newImagePath,
        newHumanAnswerText,
        newHumanAnswer,
        newRightAnswer,
      } = element;
      const modalImg = renderElement({
        tagHTML: 'div',
        className: 'modal__image',
        parentElement: resultsLine,
      });
      modalImg.style.backgroundImage = newImagePath;

      const answerHuman = renderElement({
        tagHTML: 'p',
        className: 'modal__answer modal__answer--human',
        parentElement: resultsLine,
        innerText: newHumanAnswerText,
      });
      const answerRight = renderElement({
        tagHTML: 'p',
        className: 'modal__answer modal__answer--right',
        parentElement: resultsLine,
        innerText: newRightAnswer,
      });
      if (answerHuman.innerText === answerRight.innerText) {
        answerHuman.className += ' modal__answer--green';
      } else {
        answerHuman.className += ' modal__answer--red';
      }
    });
    renderElement({
      tagHTML: 'img',
      className: 'modal__yoda',
      parentElement: wrapper,
      attr: { src: 'https://raw.githubusercontent.com/pspaczek/CodersCamp2020JavaScript/main/static/assets/ui/MasterYodaLeft.png' },
    });
    const input = renderElement({
      tagHTML: 'input',
      className: 'modal__input',
      parentElement: wrapper,
      attr: { type: 'text' },
    });
    renderElement({
      tagHTML: 'button',
      className: 'button button--red modal__button',
      innerText: `May the force be with you`,
      parentElement: wrapper,
      attr: { type: 'submit' },
    });

    const modalBtn = document.querySelector('.modal__button');
    modalBtn.addEventListener('click', () => {
      localStorage.removeItem('humAns');
      localStorage.removeItem('comAns');
      location.href = '/';
      wrapper.style.display = 'none';
    });
    wrapper.style.display = 'none';
  }
}
export default ModalContent;
