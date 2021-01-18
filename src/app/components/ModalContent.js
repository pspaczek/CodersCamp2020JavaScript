import renderElement from '../tools/renderElement';
import Answers from './Answers';
class ModalContent {
  constructor(humanAnswers, computerAnswers) {
    this.humanAnswers = humanAnswers;
    this.computerAnswers = computerAnswers;
  }
  render() {
    const content = renderElement({
      tagHTML: 'div',
      className: 'modal__content',
    });
    const endGameHeading = renderElement({
      tagHTML: 'h2',
      className: 'modal__heading',
      innerText: 'GAME OVER',
      parentElement: content,
    });
    const endGameHeadingSmall = renderElement({
      parentElement: content,
      tagHTML: 'h4',
      className: 'modal__heading--small',
      //   innerText: `The force is strong in you young Padawan! During 1 minute you have answered ${
      //     humanAnswers.correct
      //   } / ${
      //     humanAnswers.correct + humanAnswers.incorrect
      //   } and computer guessed ${computerAnswers.correct} / ${
      //     computerAnswers.correct + computerAnswers.incorrect
      //   }. `,
    });
  }
}
export default ModalContent;
