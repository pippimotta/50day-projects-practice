const buttons = document.querySelectorAll('button')

buttons.forEach(button =>
  button.addEventListener('click', ()=> {
    buttonName = button.innerText
    buttonRoute = `sounds/${buttonName}.mp3`
    var buttonSound =  new Audio(buttonRoute)
    buttonSound.play()
  }

  )
)
