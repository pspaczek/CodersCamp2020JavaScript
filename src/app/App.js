import MenuOptions from './components/MenuOptions';
import GameModeName from './components/GameModeName';
import UsersRanking from './components/UsersRanking';
import Button from './components/Button '; 

export const App = ({ options }) => {
  new MenuOptions().render();
  new GameModeName();
  new UsersRanking().render([
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
  ]);
  new Button().render();
};
