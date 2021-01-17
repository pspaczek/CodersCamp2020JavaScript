import GameModeName from './components/GameModeName';
import UsersRanking from './components/UsersRanking';
import ModalWithShadowOverlay from './components/ModalWithShadowOverlay';

export const App = ({ options }) => {
  new MenuOptions().render();
  new UsersRanking().render([
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
    { name: 'dad', score: '10/20' },
  ]);
  new ModalWithShadowOverlay().render();
};
