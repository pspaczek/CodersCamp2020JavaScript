import renderElement from '../tools/renderElement';

class GameModeName {
  description = {
    people: 'Who is this character?',
    vehicles: 'Do you recognize this vehicle?',
    starships: 'Do you recognize this starship?',
  };
  constructor() {
    this.descriptionMode = this.description.people;
    this.activeMode = document.querySelector('.options');
    this.activeMode.addEventListener('click', this.changeActiveMode.bind(this));
    this.render();
  }
  changeActiveMode() {
    let activeModeData = document
      .querySelector('.options__mode--active')
      .getAttributeNode('data-mode').textContent;
    switch (activeModeData) {
      case 'people':
        this.descriptionMode = this.description.people;
        break;
      case 'vehicles':
        this.descriptionMode = this.description.vehicles;
        break;
      default:
        this.descriptionMode = this.description.starships;
        break;
    }
    document.querySelector(
      '.mode-container__header',
    ).innerText = `MODE: ${this.descriptionMode}`;
  }
  render() {
    const gameMode = renderElement({
      tagHTML: 'header',
      className: 'mode-container',
    });
    renderElement({
      tagHTML: 'h1',
      className: 'mode-container__header',
      innerText: `MODE: ${this.descriptionMode}`,
      parentElement: gameMode,
    });
  }
}

export default GameModeName;
