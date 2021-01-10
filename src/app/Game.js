import menuOptionsObj from './components/MenuOptions';
import userRankingObj from './components/UsersRanking';

class Game {
  constructor() {}
  start() {
    const ranking = userRankingObj.render([{name: 'Ala', score: '10/20'}, {name: 'Ala', score: '10/20'}, {name: 'Ala', score: '10/20'}])
    const menuOptions = menuOptionsObj.render()
    menuOptions.addEventListener('click', (e) => menuOptionsObj.showActiveMode(e, menuOptionsObj.changeMode))
  }

}

const game = new Game()

export default game