// THEME SWITCHER
function initThemeSwitcher() {
  const themeSwitcherText = document.querySelectorAll('.theme-switcher-text')
  const card = document.getElementById('main')
  const cardElements = document.querySelectorAll('main *')
  const cardElementsArr = Array.from(cardElements)

  cardElementsArr.shift() // Removes the QR code image from the array node.

  if (themeSwitcherText && card && cardElementsArr) {
    function handleSwitchTheme(event) {
      if (event.key === 't') {
        themeSwitcherText[0].classList.toggle('dark-theme-active')
        themeSwitcherText[1].classList.toggle('light-theme-active')

        document.body.classList.toggle('body-dark-theme')
        card.classList.toggle('card-dark-theme')

        cardElementsArr.forEach(cardElement => {
          cardElement.classList.toggle('text-dark-theme')
        })
      }
    }

    window.addEventListener('keypress', handleSwitchTheme)
  }
}

initThemeSwitcher()
