import renderElement from '../tools/renderElement';

class LightsaberTimer {
  constructor() {};

  render() {
    const lightsaberTimer = renderElement({
      tagHTML: 'section', 
      className: 'timer',
    })

    const lightsaberHandle = renderElement({
      tagHTML: 'img',
      className: 'timer__lightsaberHandle',
      parentElement: lightsaberTimer,
      attr: {'src' : '../../../static/assets/ui/LightsaberHandle.png'}
    })

    const lightsaberProgressBar = renderElement({
      tagHTML: 'div',
      className: 'timer__lightsaberProgressBar',
      parentElement: lightsaberTimer,
    })

    const saber = renderElement({
      tagHTML: 'div',
      className: 'timer__saber',
      parentElement: lightsaberTimer,
    })

    return lightsaberTimer;
  }

  initTimer() {
    const saber = document.querySelector('.timer__saber');
    const saberInitialWidth = saber.offsetWidth;
    saber.style.width = saberInitialWidth + 'px';

    const totalTime = 120;
    let timeleft = totalTime;
    if (timeleft > 0) {
      const interval = setInterval(() => {   
        timeleft--;
        saber.style.width = Math.round(timeleft * saberInitialWidth / totalTime) + 'px';

        if (timeleft <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
  }
}

export default LightsaberTimer;