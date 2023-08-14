const menu = {
  isVisible: 'is-visible',
  open() {
    let menuElm = document.querySelector('#menu')
    menuElm.classList.toggle(this.isVisible)
  },
  close() {
    let menuElm = document.querySelector('#menu')
    menuElm.classList.remove(this.isVisible)
  },
  goTo(id) {
    let sections = document.querySelectorAll('.section-app')
    sections.forEach((i) => {
      if (i.classList.contains(this.isVisible)) {
        i.classList.remove(this.isVisible)
      }
    })
    let sectionElm = document.querySelector(`#${id}`)
    sectionElm.classList.add(this.isVisible)
    this.close()
  }
}

export default menu
