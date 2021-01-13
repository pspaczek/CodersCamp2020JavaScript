import renderElement from '../tools/renderElement';

class GameModeName {
  description = {
    people: 'Who is this character?',
    vehicles: 'Do you recognize this vehicle?',
    starships: 'Do you recognize this starship?',
  };
  constructor() {
    this.modeHeader = this.description.people;
    this.activeMode = document.querySelector('.options');
    this.activeMode.addEventListener('click', this.changeActiveMode.bind(this));
    this.renderMode();
  }
  changeActiveMode() {
    let activeModeData = document
      .querySelector('.options__mode--active')
      .getAttributeNode('data-mode').textContent;
    switch (activeModeData) {
      case 'people':
        this.modeHeader = this.description.people;
        break;
      case 'vehicles':
        this.modeHeader = this.description.vehicles;
        break;
      default:
        this.modeHeader = this.description.starships;
        break;
    }
    document.querySelector(
      '.mode__header',
    ).innerText = `MODE: ${this.modeHeader}`;
  }
  renderMode() {
    const gameMode = renderElement({
      tagHTML: 'section',
      className: 'mode',
    });
    renderElement({
      tagHTML: 'h1',
      className: 'mode__header',
      innerText: `MODE: ${this.modeHeader}`,
      parentElement: gameMode,
    });
  }
}

export default GameModeName;
