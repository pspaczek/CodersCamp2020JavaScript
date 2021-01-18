import renderElement from '../tools/renderElement';
import ModalContent from './ModalContent';
let modalContent = new ModalContent();
class Modal {
  constructor() {}
  render() {
    const modalOverlay = renderElement({
      tagHTML: 'div',
      className: 'overlay',
    });
    const modal = renderElement({
      tagHTML: 'div',
      className: 'modal',
    });
    modalContent.render();
  }

  closeModal() {
    modalOverlay.style.display = 'none';
    modal.style.display = 'none';
  }
}

export default Modal;
