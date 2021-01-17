import renderElement from '../tools/renderElement';
class ModalWithShadowOverlay {
  render(modalContent = 'hello') {
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
      insideModal.innerHTML = modalContent;
    } else {
      modalOverlay.remove();
      modal.remove();
    }
  }
}

export default ModalWithShadowOverlay;
