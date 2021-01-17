
export const App = ({ options }) => {
  
import GameModeName from './components/GameModeName';
import UsersRanking from './components/UsersRanking';
import QuestionGenerator from './components/QuestionGenerator';
import ModeRules from './components/ModeRules';
import Button from './components/Button'; 
import PeopleImg from './components/PeopleImg';
import MenuOptions from './components/MenuOptions';

export const App = ({options}) => {
  new QuestionGenerator().returnAnswersObject('people')
  new MenuOptions().render();
  new GameModeName();
  new ModeRules().renderRules();
  new PeopleImg().render();
  new UsersRanking().render([
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
  ]);
  new Button().render();
};
