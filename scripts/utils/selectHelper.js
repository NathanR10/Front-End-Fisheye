// Afficher les outlines si la touche 'tabulation' est utilisé
window.onkeydown = function (event) {
  if (event.keyCode === 9) {
    const elms = document.querySelectorAll('.selectHelper')
    elms.forEach((elm) => {
      !elm.className.includes(' useSelectHelper') &&
        elm.setAttribute('class', elm.className + ' useSelectHelper')
    })
  }
}
// Masquer les out-lines si un 'click' est effectué
window.onclick = () => {
  const elms = document.querySelectorAll('.selectHelper')
  elms.forEach((elm) => {
    elm.setAttribute('class', elm.className.replace(' useSelectHelper', ''))
  })
}
