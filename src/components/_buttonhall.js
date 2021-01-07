const hallText = "Hall of fame";
const hallButton = hallText.toUpperCase();

function createButtonHall() {
    return `<button class="buttonsBottom__buttonHall>
                <i class="buttonsBottom__icon></i>
                ${hallButton}
            </button>`;
}

document.getElementById('swquiz-app').innerHTML = createButtonHall();