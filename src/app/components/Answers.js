import renderElement from '../tools/renderElement'
import QuestionGenerator from './QuestionGenerator';
import PeopleImg from './PeopleImg'
import TextTimer from './TextTimer';
import LightsaberTimer from './LightsaberTimer';

class Answers {
  constructor() {
    this.humanAnswers = {correct: 0, incorrect: 0}
    this.computerAnswers = {correct: 0, incorrect: 0}
    this.isChosen = false;
  }
async render(answersPromise) {
  const answersObject = await answersPromise
  const {answers, rightAnswer} = answersObject
  const section = renderElement({
    tagHTML: 'section',
    className: 'answers',
    })
  answersObject.answers.forEach(answer => {
    renderElement({
      tagHTML: 'button',
      className: 'answers__answer',
      parentElement: section,
      innerText: answer,
      on: {click: (e) => this.checkIfCorrect(e, rightAnswer, answers)}
      })
    })

    return section
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
    if (this.isChosen) return
    if (e.target.innerText === rightAnswer) {
      e.target.classList.add('answers__answer--correct')
      this.humanAnswers.correct++
    } else {
      e.target.classList.add('answers__answer--incorrect')
      this.humanAnswers.incorrect++
    }
    this.isChosen = true
    const answers = await new QuestionGenerator().returnAnswersObject(mode)
    const peopleImg = new PeopleImg()
    this.computerChoose(rightAnswer, answersArray)
    setTimeout(() => {
      this.isChosen = false
      e.target.parentNode.remove()
      document.querySelector('.mode__image').remove()
      peopleImg.render(answers)
      this.render(answers)
    }, 500)
    // console.dir(this.computerAnswers, this.humanAnswers)
  }

  computerChoose(rightAnswer, answers) {
    const random = Math.floor(Math.random() * answers.length)
    if (answers[random] === rightAnswer) {
      this.computerAnswers.correct++
    } else {
      this.computerAnswers.incorrect++
    }
  }
}

export default Answers