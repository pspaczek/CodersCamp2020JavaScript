import MenuOptions from './components/MenuOptions';
import UsersRanking from './components/UsersRanking';
import QuestionGenerator from './components/QuestionGenerator';


export const App = ({options}) => {
  new QuestionGenerator().fetchQuestion('people')
  new MenuOptions().render()
  new UsersRanking().render([{name: 'dad', score: '10/20'}, {name: 'dad', score: '10/20'}, {name: 'dad', score: '10/20'}])
}


