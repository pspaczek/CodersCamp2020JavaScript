import MenuOptions from './components/MenuOptions';
import UsersRanking from './components/UsersRanking';
import QuestionGenerator from './components/QuestionGenerator';
import Answers from './components/Answers'
export const App = ({options}) => {
  new MenuOptions().render()
  new UsersRanking().render([{name: 'dad', score: '10/20'}, {name: 'dad', score: '10/20'}, {name: 'dad', score: '10/20'}])
  const answersObject = new QuestionGenerator().returnAnswersObject('people')
  new Answers().render(answersObject)
}


