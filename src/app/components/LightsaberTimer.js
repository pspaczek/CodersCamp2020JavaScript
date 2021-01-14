import renderElement from '../tools/renderElement';

class LightsaberTimer {
  constructor() {};

  render() {
    const lightsaberTimer = renderElement({
      tagHTML: 'section', 
      className: 'timer',
    })

    const lightsaberHandle = document.createElement('img');
    lightsaberHandle.src = '../../../static/assets/ui/LightsaberHandle.png';
    lightsaberHandle.classList.add('timer__lightsaberHandle');
    lightsaberHandle.alt = 'lightsaber';
    lightsaberTimer.appendChild(lightsaberHandle);

    const lightsaberProgressBar = document.createElement('div');
    lightsaberProgressBar.classList.add('timer__lightsaberProgressBar');
    lightsaberTimer.appendChild(lightsaberProgressBar);

    const saber = document.createElement('div');
    saber.classList.add('timer__saber');
    lightsaberTimer.appendChild(saber);
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