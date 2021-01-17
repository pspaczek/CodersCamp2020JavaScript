import renderElement from '../tools/renderElement'
import QuestionGenerator from './QuestionGenerator';
import PeopleImg from './PeopleImg'

class Answers {
  constructor() {
    this.humanAnswers = {correct: 0, incorrect: 0}
    this.computerAnswers = {correct: 0, incorrect: 0}
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
  }

  async checkIfCorrect(e, rightAnswer, answersArray) {
    const mode = document.querySelector('.options__mode--active').dataset.mode;
    if (e.target.innerText === rightAnswer) {
      e.target.classList.add('answers__answer--correct')
      this.humanAnswers.correct++
    } else {
      e.target.classList.add('answers__answer--incorrect')
      this.humanAnswers.incorrect++
    }
    const answers = await new QuestionGenerator().returnAnswersObject(mode)
    const peopleImg = new PeopleImg()
    this.computerChoose(rightAnswer, answersArray)
    setTimeout(() => {
      e.target.parentNode.remove()
      document.querySelector('.mode__image').remove()
      peopleImg.render(answers)
      this.render(answers)
    }, 1000)
    console.dir(this.computerAnswers, this.humanAnswers)
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