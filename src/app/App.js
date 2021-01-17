import MenuOptions from './components/MenuOptions';
import GameModeName from './components/GameModeName';
import UsersRanking from './components/UsersRanking';
import ModeRules from './components/ModeRules';
import Button from './components/Button'; 
import QuestionGenerator from './components/QuestionGenerator';
import Answers from './components/Answers';

export const App = ({options}) => {
  new MenuOptions().render()
  const mode = document.querySelector('.options__mode--active').dataset.mode;
  const answersPromise = new QuestionGenerator().returnAnswersObject(mode)
  new Answers().render(answersPromise)
  new GameModeName();
  new ModeRules().renderRules();
  new UsersRanking().render([
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
  ]);
  new Button().render();
};
