import renderElement from '../tools/renderElement';
import QuestionGenerator from './QuestionGenerator';
import PeopleImg from './PeopleImg';
import TextTimer from './TextTimer';
import LightsaberTimer from './LightsaberTimer';

class Answers {
  constructor() {
    this.humanAnswersStorage = JSON.parse(localStorage.getItem('humAns')) || [];
    this.computerAnswersStorage =
      JSON.parse(localStorage.getItem('comAns')) || [];
    this.humanAnswers = { correct: 0, incorrect: 0 };
    this.computerAnswers = { correct: 0, incorrect: 0 };
    this.isChosen = false;
    this.humanAnswerId = [];
  }
  async render(answersPromise) {
    const answersObject = await answersPromise;
    const { answers, rightAnswer } = answersObject;
    const section = renderElement({
      tagHTML: 'section',
      className: 'answers',
    });
    answersObject.answers.forEach((answer) => {
      renderElement({
        tagHTML: 'button',
        className: 'answers__answer',
        parentElement: section,
        innerText: answer,
        on: { click: (e) => this.checkIfCorrect(e, rightAnswer, answers) },
      });
    });

    return section;
  }

  async renderTimers() {
    const lightsaberTimer = await new LightsaberTimer();
    const textTimer = await new TextTimer();
    lightsaberTimer.render();
    textTimer.render();
    lightsaberTimer.initTimer();
    textTimer.initTimer();
  }

  async checkIfCorrect(e, rightAnswer, answersArray) {
    const mode = document.querySelector('.options__mode--active').dataset.mode;
    const activePath = document.querySelector('.mode__image--active').style
      .backgroundImage;
    if (this.isChosen) return;
    if (e.target.innerText === rightAnswer) {
      e.target.classList.add('answers__answer--correct');
      this.humanAnswers.correct++;
      this.humanAnswerId.push(1);
      const newId = this.humanAnswerId.length;
      const newHumanAnswerText = e.target.innerText;
      const newRightAnswer = rightAnswer;
      const newImagePath = activePath;
      const humAnsToStorage = {
        newId,
        newImagePath,
        newHumanAnswerText,
        newRightAnswer,
      };
      this.humanAnswersStorage.push(humAnsToStorage);
      localStorage.setItem('humAns', JSON.stringify(this.humanAnswersStorage));
      localStorage.setItem('score', JSON.stringify(this.humanAnswers));
    } else {
      e.target.classList.add('answers__answer--incorrect');
      this.humanAnswers.incorrect++;
      this.humanAnswerId.push(1);
      const newId = this.humanAnswerId.length;
      const newHumanAnswerText = e.target.innerText;
      const newRightAnswer = rightAnswer;
      const newImagePath = activePath;
      const humAnsToStorage = {
        newId,
        newImagePath,
        newHumanAnswerText,
        newRightAnswer,
      };
      this.humanAnswersStorage.push(humAnsToStorage);
      localStorage.setItem('humAns', JSON.stringify(this.humanAnswersStorage));
      localStorage.setItem('score', JSON.stringify(this.humanAnswers));
    }
    this.isChosen = true;
    const answers = await new QuestionGenerator().returnAnswersObject(mode);
    const peopleImg = new PeopleImg();
    this.computerChoose(rightAnswer, answersArray);
    setTimeout(() => {
      this.isChosen = false;
      e.target.parentNode.remove();
      document.querySelector('.mode__image').remove();
      peopleImg.render(answers);
      this.render(answers);
    }, 200);
    // console.log(this.computerAnswers, this.humanAnswers);
  }

  computerChoose(rightAnswer, answers) {
    const random = Math.floor(Math.random() * answers.length);
    const compAnswer = answers[random];
    if (compAnswer === rightAnswer) {
      this.computerAnswers.correct++;
      const newId = this.humanAnswerId.length;
      const newComputerAnswer = compAnswer;
      const comAnsToStorage = {
        newId,
        newComputerAnswer,
      };
      this.computerAnswersStorage.push(comAnsToStorage);
      localStorage.setItem(
        'comAns',
        JSON.stringify(this.computerAnswersStorage),
      );
    } else {
      this.computerAnswers.incorrect++;
      const newId = this.humanAnswerId.length;
      const newComputerAnswer = compAnswer;
      const comAnsToStorage = {
        newId,
        newComputerAnswer,
      };
      this.computerAnswersStorage.push(comAnsToStorage);
      localStorage.setItem(
        'comAns',
        JSON.stringify(this.computerAnswersStorage),
      );
    }
  }
}

export default Answers;
