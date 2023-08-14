import sounds from './sounds.js'

const bongo = {
  toggleButton(sound) {
    let buttonElm = document.querySelector(`[data-sound="${sound}"]`)
    buttonElm.classList.toggle('is-active')
  },
  togglePaw(paw) {
    let paws = document.querySelectorAll(`.${paw}`)
    paws.forEach((i) => {
      i.classList.toggle('is-visible')
    })
  },
  tap(sound, paw) {
    sounds.playSound(sound)
    this.toggleButton(sound)
    this.togglePaw(paw)
  }
}

export default bongo
