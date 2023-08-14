import bongo from './bongo.js'
import menu from './menu.js'

const handler = {
  onTap(event) {
    let dataSound = event.target.dataset.sound
    let dataPaw = event.target.dataset.paw
    if (dataSound && dataPaw) {
      event.preventDefault()
      if (event.type === 'touchstart' || event.type === 'mousedown') {
        bongo.tap(dataSound, dataPaw)
      }
      if (event.type === 'touchend' || event.type === 'mouseup') {
        bongo.toggleButton(dataSound)
        bongo.togglePaw(dataPaw)
      }
    }
  },
  onClick(event) {
    let dataMenu = event.target.dataset.menu
    let matchOpen = event.target.matches('#open')
    if (dataMenu) {
      menu.goTo(dataMenu)
    }
    if (matchOpen) {
      menu.open()
    }
  }
}

export default handler
