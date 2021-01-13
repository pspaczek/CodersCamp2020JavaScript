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

    const lightsaberProgressBar = document.createElement('img');
    lightsaberProgressBar.src = '../../../static/assets/ui/ProgressBar.png';
    lightsaberProgressBar.classList.add('timer__lightsaberProgressBar');
    lightsaberProgressBar.alt = 'progressbar';
    lightsaberTimer.appendChild(lightsaberProgressBar);

    const saber = document.createElement('img');
    lightsaberProgressBar.classList.add('timer__saberProgressBar');
    lightsaberProgressBar.alt = 'saber-progressbar';
    lightsaberTimer.appendChild(saber);
  }

  

}

export default LightsaberTimer;