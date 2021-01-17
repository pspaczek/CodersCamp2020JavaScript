class EventListeners {

  addListeners() {
    document.addEventListener('click', (e) => {
      const { target } = e;
      const modeRules = document.querySelector('.mode__descriptions');
      const modeRanking = document.querySelector('.ranking');
      const buttonsSection = document.querySelector('.buttons');
      const rulesButton = document.querySelector('.button__rules');
      const rankingButton = document.querySelector('.button__ranking');

      if (target.closest('.button__ranking')) {
        target.style.display = 'none';
        modeRules.style.display = 'none';
        modeRanking.style.display = 'grid';
        rulesButton.style.display = 'block';

        buttonsSection.prepend(rulesButton)
      };

      if (target.closest('.button__rules')) {
        target.style.display = 'none';
        modeRanking.style.display = 'none';
        modeRules.style.display = 'flex';
        rankingButton.style.display = '';
        
        buttonsSection.prepend(rankingButton);
      }
    })
  }
}

export default EventListeners;
