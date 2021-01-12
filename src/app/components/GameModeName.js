import renderElement from '../tools/renderElement';

class GameModeName {
  description = {
    people: 'Who is this character?',
    vehicles: 'Do you recognize this vehicle?',
    starships: 'Do you recognize this starship?',
  };
  constructor() {}
  renderMode() {
    const gameMode = renderElement({
      tagHTML: 'header',
      className: 'mode-container',
    });
    renderElement({
      tagHTML: 'h1',
      className: 'mode-container__header',
      innerText: `MODE:`,
      parentElement: gameMode,
    });
  }
}

export default GameModeName;
