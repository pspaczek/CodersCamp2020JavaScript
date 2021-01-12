import renderElement from '../tools/renderElement';

class LightsaberTimer {
  constructor() {};

  render() {
    const lightsaberTimer = renderElement({
      tagHTML: 'section', 
      className: 'timer',
    })

    const LightsaberHandle = document.createElement('img');
    LightsaberHandle.src = '../../../static/assets/ui/LightsaberHandle.png';
    LightsaberHandle.classList.add('timer__lightsaberHandle');
    LightsaberHandle.alt = 'lightsaber';
    lightsaberTimer.appendChild(LightsaberHandle);

    const LightsaberProgressBar = document.createElement('img');
    LightsaberProgressBar.src = '../../../static/assets/ui/ProgressBar.png';
    LightsaberProgressBar.classList.add('timer__lightsaberProgressBar');
    LightsaberProgressBar.alt = 'progressbar';
    lightsaberTimer.appendChild(LightsaberProgressBar);
  }

  

}

export default LightsaberTimer;