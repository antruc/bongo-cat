import './app.css'
import './scripts/reload.js'
import onEvent from './scripts/onEvent.js'
import handler from './scripts/handler.js'
import sounds from './scripts/sounds.js'

function app() {
  onEvent('touchstart touchend mousedown mouseup', handler.onTap)
  onEvent('click', handler.onClick)
  sounds.initAll()
  let root = document.querySelector('#app')
  root.classList.add('is-visible')
}

if (window.IS_DEVELOPMENT) {
  setTimeout(() => app(), 2000)
} else {
  onEvent('deviceready', app)
}
