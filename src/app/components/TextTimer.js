import renderElement from '../tools/renderElement';

class TextTimer {
  constructor() {};

  render() {
    const textTimer = renderElement({
      tagHTML: 'section', 
      className: 'text-timer',
    });

    const timer = document.createElement('span');
    timer.classList.add('text-timer__timeleft');
    textTimer.append(timer);
  }

  initTimer() {
    const timer = document.querySelector('.text-timer__timeleft');
    const totalTime = 120;
    let timeleft = totalTime;
    if (timeleft > 0) {
      const interval = setInterval(() => {
        timeleft--;
        let minutes = Math.floor(timeleft / 60);
        let seconds = Math.floor(timeleft % 60)
        timer.textContent = `Time left: ${minutes}m ${seconds}s`;

        if (timeleft < 0) {
          clearInterval(interval);
          timer.textContent = `Time left: 0m 0s`;
        }
      }, 1000);
    }
  }
}

export default TextTimer;