import { wrap } from 'regenerator-runtime';
import renderElement from '../tools/renderElement';

class ModalContent {
  constructor() {
    this.humanAnswers = JSON.parse(localStorage.getItem('humAns')) || [];
    this.computerAnswers = JSON.parse(localStorage.getItem('comAns')) || [];
    this.score = JSON.parse(localStorage.getItem('score')) || {};
  }
  render() {
    const app = document.querySelector('.app');
    const correct = this.score.correct;
    const incorrect = this.score.incorrect;
    console.log(correct);
    const wrapper = renderElement({
      tagHTML: 'div',
      className: 'modal',
      parentElement: app,
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
      During 2 minutes you have answered ${correct}
     from ${correct + incorrect} questions`,
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
      attr: { src: '../../../static/assets/ui/MasterYodaLeft.png' },
    });
    renderElement({
      tagHTML: 'input',
      className: 'modal__input',
      parentElement: wrapper,
      attr: {
        type: 'text',
        placeholder: 'username',
        id: 'username',
        required: true,
      },
    });
    renderElement({
      tagHTML: 'input',
      className: 'button button--red modal__button',
      parentElement: wrapper,
      attr: {
        type: 'submit',
        id: 'username',
        value: `May the force be with you`,
      },
    });

    const modalBtn = document.querySelector('.modal__button');
    modalBtn.addEventListener('click', () => {
      localStorage.removeItem('humAns');
      localStorage.removeItem('comAns');
      location.href = '../../../index.html';
      wrapper.style.display = 'none';
    });
    wrapper.style.display = 'none';
  }
}
export default ModalContent;
