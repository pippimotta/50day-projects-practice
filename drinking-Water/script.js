const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((smallCup, idx) => {
  smallCup.addEventListener('click', () => {
    highlightCups(idx)

  })
})


function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
   !smallCups[idx].nextElementSibling?.classList.contains('full')
) { idx --}
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
    updatePercentage()
  })
}

function updatePercentage(){
  const fullCups = document.querySelectorAll(".cup-small.full").length
  const totalCups = smallCups.length

  if (fullCups == 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    drinkPer = fullCups/totalCups*100
    percentage.innerText = `${drinkPer}%`
    percentage.style.height = `${fullCups/totalCups * 330}px`
    const remainedLiter = 2*(1-0.01*drinkPer)
    liters.innerText = `${remainedLiter}L`

  if (fullCups == totalCups) {
      remained.style.visibility = 'hidden'
      remained.style.height = 0
    } else {
      remained.style.visibility = 'visible'
    }

  }
}
