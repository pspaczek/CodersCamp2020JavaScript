import renderElement from '../tools/renderElement';
import GameModeName from './GameModeName';

class ModeRules {
  description = {
    people:
      'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now).',
    vehicles:
      'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select which vehicle from Star Wars is showed on the left.',
    starships:
      'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select which starship from Star Wars is showed on the left.',
  };
  constructor() {
    this.descriptionMode = this.description.people;
    this.activeMode = document.querySelector('.options');
    this.activeMode.addEventListener('click', this.changeActiveMode.bind(this));
    this.gameMode = document.querySelector('.mode');
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
      '.mode__description',
    ).innerText = `${this.descriptionMode}`;
  }
  renderRules() {
    const gameModeDescription = renderElement({
      tagHTML: 'div',
      className: 'mode__descriptions',
      parentElement: this.gameMode,
    });
    const title = renderElement({
      tagHTML: 'div',
      className: 'mode__title',
      parentElement: gameModeDescription,
    });
    renderElement({
      tagHTML: 'i',
      className: 'fas fa-book mode__title--icon',
      parentElement: title,
    });
    renderElement({
      tagHTML: 'h2',
      className: 'mode__title--text',
      innerText: 'MODE RULES',
      parentElement: title,
    });
    renderElement({
      tagHTML: 'p',
      className: 'mode__description',
      innerText: `${this.descriptionMode}`,
      parentElement: gameModeDescription,
    });
  }
}

export default ModeRules;
