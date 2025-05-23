export default function onEvent(name, listener) {
  // Add more than one EventListener
  if (/\s/.test(name)) {
    let names = name.split(' ')
    names.forEach((i) => {
      document.addEventListener(i, listener, { passive: false }) // Stop logging
    })
  } else {
    document.addEventListener(name, listener, false)
  }
}
