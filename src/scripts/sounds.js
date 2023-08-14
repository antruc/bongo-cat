import lowLag from '../lib/lowLag.js'
import instruments from './instruments.js'

const sounds = {
  loadAll(sound, end) {
    for (let i = 0; i <= end; i++) {
      lowLag.load(`${sound + i}.mp3`)
    }
  },
  initAll() {
    lowLag.init({
      urlPrefix: './mp3/',
      debug: 'none'
    })
    Object.entries(instruments).forEach(([key, value]) => {
      this.loadAll(key, value)
    })
  },
  playSound(sound) {
    lowLag.play(`${sound}.mp3`)
  }
}

export default sounds
