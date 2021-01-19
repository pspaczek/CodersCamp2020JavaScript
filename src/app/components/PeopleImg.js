import renderElement from '../tools/renderElement';

class PeopleImg {
  constructor() {
    this.activePath = '';
  }
  async render(answersPromise) {
    const answersObject = await answersPromise;
    const id = answersObject.rightAnswerId;
    const mode = document.querySelector('.options__mode--active').dataset.mode;
    const app = document.querySelector('.app');
    this.activePath = `/static/assets/img/modes/${mode}/${id}.jpg`;
    const imageCard = renderElement({
      tagHTML: 'div',
      className: 'mode__image mode__image--active',
      parentElement: app,
    });
    imageCard.style.backgroundImage = `url(${this.activePath})`;
  }

  renderStatic(nr) {
    const app = document.querySelector('.app');
    const imageCard = renderElement({
      tagHTML: 'div',
      className: 'mode__image mode__image--static',
      parentElement: app,
    });
    imageCard.style.backgroundImage = `url(/static/assets/img/modes/people/${nr}.jpg)`;
  }
}

export default PeopleImg;
