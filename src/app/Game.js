import menuOptionsObj from './components/MenuOptions';

class Game {
  constructor() {}
  start() {
    const menuOptions = menuOptionsObj.render()
    menuOptions.addEventListener('click', (e) => menuOptionsObj.showActiveMode(e, menuOptionsObj.changeMode))
  }
}

const game = new Game()

export default game