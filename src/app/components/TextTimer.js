import renderElement from '../tools/renderElement';
import ModalContent from './ModalContent';

class TextTimer {
  constructor() {}

  render() {
    const appContainer = document.querySelector('.app');
    const textTimer = renderElement({
      tagHTML: 'section',
      className: 'text-timer',
      parentElement: appContainer,
    });

    const timer = renderElement({
      tagHTML: 'span',
      className: 'text-timer__timeleft',
      parentElement: textTimer,
    });
    return textTimer;
  }

  initTimer() {
    const timer = document.querySelector('.text-timer__timeleft');
    timer.textContent = '';
    const totalTime = 120;
    let timeleft = totalTime;
    if (timeleft > 0) {
      timer.textContent = `Time left: 2m 00s`;
      const interval = setInterval(() => {
        timeleft--;
        let minutes = Math.floor(timeleft / 60);
        let seconds = Math.floor(timeleft % 60);
        timer.textContent = `Time left: ${minutes}m ${seconds}s`;

        if (timeleft < 0) {
          clearInterval(interval);
          timer.textContent = `Time left: 0m 0s`;
          new ModalContent().render();
          const modal = document.querySelector('.modal');
          modal.style.display = 'flex';
        }
      }, 1000);
    }
  }
}

export default TextTimer;
