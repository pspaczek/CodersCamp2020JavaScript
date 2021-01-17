import renderElement from '../tools/renderElement';

class PeopleImg {
  constructor() {
    this.activePath = '/static/assets/img/modes/people/36.jpg';
  }
  render() {
    const imageCard = renderElement({
      tagHTML: 'div',
      className: 'mode__image',
    });
    console.log(imageCard);
    imageCard.style.backgroundImage = `url(${this.activePath})`;
  }
}

export default PeopleImg;
