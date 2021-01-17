import renderElement from '../tools/renderElement';
//object has 2 parameters to be taken, both should be other components
class ModalWithShadowOverlay {
  constructor(modalContent) {
    this.modalContent = modalContent;
  }
  render() {
    const modalOverlay = renderElement({
      tagHTML: 'div',
      className: 'overlay',
    });

    const modal = renderElement({
      tagHTML: 'div',
      className: 'modal',
    });
    if (modalContent) {
      const insideModal = renderElement({
        tagHTML: 'div',
        className: 'modal__content',
        parentElement: modal,
      });
    }
    insideModal.appendChild(modalContent.content);
  }
  closeModal() {
    modalOverlay.style.display = 'none';
    modal.style.display = 'none';
  }
}

export default ModalWithShadowOverlay;
