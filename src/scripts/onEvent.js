export default function onEvent(name, listener) {
  if (/\s/.test(name)) {
    let names = name.split(' ')
    names.forEach((i) => {
      document.addEventListener(i, listener, { passive: false })
    })
  } else {
    document.addEventListener(name, listener, false)
  }
}
