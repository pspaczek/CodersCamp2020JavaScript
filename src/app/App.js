import MenuOptions from './components/MenuOptions';
import UsersRanking from './components/UsersRanking';

export const App = ({options}) => {
  new MenuOptions().render()
  new UsersRanking().render([{name: 'dad', score: '10/20'}, {name: 'dad', score: '10/20'}, {name: 'dad', score: '10/20'}])
}


