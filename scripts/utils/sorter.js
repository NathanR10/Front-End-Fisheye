// Apply an order to items

const radio = document.querySelector('#filter')

radio.addEventListener('input', function (evt) {
  const items = document.querySelectorAll('.mediaFrame')
  const itemsImage = document.querySelectorAll('.frame_image')
  const itemsCount = document.querySelectorAll('.frame_like')

  switch (radio.value) {
    case 'fame': {
      const sortItems1 = []
      itemsCount.forEach((item, i) => {
        sortItems1.push(parseInt(item.childNodes[0].innerHTML))
      })
      sortItems1.sort((a, b) => {
        return b - a
      })
      sortItems1.forEach((item, i) => {
        items.forEach((elm) => {
          const likes = elm.childNodes[1].childNodes[1].childNodes[0].innerHTML
          parseInt(likes) === sortItems1[i] && (elm.style.order = i)
          parseInt(likes) === sortItems1[i] &&
            elm.childNodes[0].setAttribute('tabindex', i + 4)
          parseInt(likes) === sortItems1[i] &&
            elm.childNodes[0].parentNode.childNodes[1].childNodes[1].childNodes[1].setAttribute(
              'tabindex',
              i + 4
            )
        })
      })
      break
    }
    case 'date': {
      const sortItems2 = []
      itemsImage.forEach((item, i) => {
        sortItems2.push(item.getAttribute('dateorder'))
      })
      sortItems2.sort((a, b) => {
        return new Date(b) - new Date(a)
      })
      sortItems2.forEach((item, i) => {
        items.forEach((elm) => {
          elm.childNodes[0].getAttribute('dateorder') === sortItems2[i] &&
            (elm.style.order = i)
          elm.childNodes[0].getAttribute('dateorder') === sortItems2[i] &&
            elm.childNodes[0].setAttribute('tabindex', i + 4)
          elm.childNodes[0].getAttribute('dateorder') === sortItems2[i] &&
            elm.childNodes[0].parentNode.childNodes[1].childNodes[1].childNodes[1].setAttribute(
              'tabindex',
              i + 4
            )
        })
      })
      break
    }
    case 'title': {
      const sortItems3 = []
      itemsImage.forEach((item, i) => {
        sortItems3.push(item.getAttribute('titleorder'))
      })
      sortItems3.sort()
      sortItems3.forEach((item, i) => {
        items.forEach((elm) => {
          elm.childNodes[0].getAttribute('titleorder') === sortItems3[i] &&
            (elm.style.order = i)
          elm.childNodes[0].getAttribute('titleorder') === sortItems3[i] &&
            elm.childNodes[0].setAttribute('tabindex', i + 4)
          elm.childNodes[0].getAttribute('titleorder') === sortItems3[i] &&
            elm.childNodes[0].parentNode.childNodes[1].childNodes[1].childNodes[1].setAttribute(
              'tabindex',
              i + 4
            )
        })
      })
      break
    }
  }
})
