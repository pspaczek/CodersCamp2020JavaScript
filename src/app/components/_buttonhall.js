class ButtonHall {
  constructor() {
    this.text = "Hall of fame";
  }
  renderButtonHall() {
    const hallText = this.text.toUpperCase();
    const hallButton = `<button class="buttonHall">
                          <i class="buttonHall__icon">iconhere</i>
                          <span class="buttonHall__text">${hallText}</span>
                        </button>`;
    document.getElementById("swquiz-app").innerHTML += hallButton;
  }

  export default ButtonHall;
