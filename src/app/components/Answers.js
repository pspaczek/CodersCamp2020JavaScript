import renderElement from '../tools/renderElement'
import QuestionGenerator from './QuestionGenerator';

class Answers {
  constructor() {
    this.correct = 0
    this.incorrect = 0
  }
async render(answersPromise) {
  const answersObject = await answersPromise
  const {answers, rightAnswer, mode} = answersObject
  console.log(answers, rightAnswer, mode)
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
      on: {click: (e) => this.checkIfCorrect(e, rightAnswer, mode)}
      })
    })
  }

  checkIfCorrect(e, rightAnswer, mode) {
    if (e.target.innerText === rightAnswer) {
      e.target.classList.add('answers__answer--correct')
      this.correct++
    } else {
      e.target.classList.add('answers__answer--incorrect')
      this.incorrect++
    }
    const answers = new QuestionGenerator().returnAnswersObject(mode)
    setTimeout(() => {
      e.target.parentNode.remove()
      this.render(answers)
    }, 1000)
  }
}

export default Answers