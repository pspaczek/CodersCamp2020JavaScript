function createButtonHall() {
    const hallText = "Hall of fame";
    const hallButton = hallText.toUpperCase();
      return `<button class="buttonHall>
                  <i class="buttonHall__icon>iconhere</i>
                  <span class="buttonHall__text">${hallButton}</span>
              </button>`;
  }
  
  function buttonHall() {
  document.getElementById('swquiz-app').innerHTML = createButtonHall();
  };

  export default buttonHall;