class ButtonHall {
  render() {
    const text = "Hall of fame";
    const hallText = text.toUpperCase();
    const hallButton = `<button class="buttonHall">
                <i class="buttonHall__icon">iconhere</i>
                <span class="buttonHall__text">${hallText}</span>
            </button>`;
    document.getElementById("swquiz-app").innerHTML += hallButton;
  }
}

export default ButtonHall;