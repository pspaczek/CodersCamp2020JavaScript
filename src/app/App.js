import MenuOptions from './components/MenuOptions';
import PeopleImg from './components/PeopleImg';
import UsersRanking from './components/UsersRanking';

export const App = ({ options }) => {
  new MenuOptions().render();
  new PeopleImg().render();
  new UsersRanking().render([
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
  ]);
};
