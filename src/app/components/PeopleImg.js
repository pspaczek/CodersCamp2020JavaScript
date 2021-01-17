import renderElement from '../tools/renderElement';

class PeopleImg {
  constructor() {
    this.activePath = '';
  }
  async render(answersPromise) {
    const answersObject = await answersPromise
    const src = answersObject.image 
    this.activePath = src
    const imageCard = renderElement({
      tagHTML: 'div',
      className: 'mode__image',
    });
    imageCard.style.backgroundImage = `url(${this.activePath})`
  }
}

export default PeopleImg;
