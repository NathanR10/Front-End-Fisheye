let currentImage = null
let itemsList = []

async function createList () {
  // trier la liste
  const orderedList = document.querySelectorAll('.mediaFrame')
  const getOrderedListOrder = []
  orderedList.forEach((item) => {
    const getPath = item.children[0].src
    const getName = item.children[0].alt
      ? item.children[0].alt
      : item.children[0].title
    getOrderedListOrder.push({
      order: item.style.order,
      path: getPath.substring(getPath.lastIndexOf('/') + 1, getPath.length),
      name: getName
    })
  })

  getOrderedListOrder.sort((a, b) => {
    return a.order - b.order
  })

  const sortList = []
  const sortListName = []
  getOrderedListOrder.forEach((item) => {
    sortList.push(item.path)
    sortListName.push(item.name)
  })

  const lists = {
    sortList,
    sortListName
  }

  return lists
}

// eslint-disable-next-line no-unused-vars
async function displayLightBox (path) {
  // retirer le compteur de like général
  document.querySelector('.totalLikesFrame').style.display = 'none'

  // Chargement de la liste au chargement de la lightbox
  itemsList = await createList()

  for (let i = 0; i < itemsList.sortList.length; i++) {
    if (itemsList.sortList[i] === path) {
      currentImage = i
      break
    }
  }

  const lightBox = document.getElementById('lightBox')
  const image = document.querySelector('.lightBox-image__img')
  const video = document.querySelector('.lightBox-image__video')
  const main = document.getElementById('main')
  const body = document.getElementById('body')
  lightBox.style.display = 'flex'
  main.style.filter = 'blur(3px)'
  body.style.overflow = 'hidden'
  main.style.pointerEvents = 'none'

  const photographerName = document.querySelector('h1').innerHTML.split(' ')[0]

  if (itemsList.sortList[currentImage].split('.')[1] === 'mp4') {
    video.setAttribute(
      'src',
      `assets/Sample Photos/${photographerName.replace('-', ' ')}/${path}`
    )
    document.querySelector('.lightBox-image__video').style.display = 'block'
    document.querySelector('.lightBox-image__img').style.display = 'none'
    document.querySelector('.lightBox-image__img').title =
      itemsList.sortListName[currentImage]
  } else {
    image.setAttribute(
      'src',
      `assets/Sample Photos/${photographerName.replace('-', ' ')}/${path}`
    )
    document.querySelector('.lightBox-image__img').style.display = 'block'
    document.querySelector('.lightBox-image__video').style.display = 'none'
    document.querySelector('.lightBox-image__img').alt =
      itemsList.sortListName[currentImage]
  }

  document.querySelector('.lightBox-title').innerHTML =
    itemsList.sortListName[currentImage]
}

function closeLightBox () {
  // afficher à nouveau le compteur de like général
  document.querySelector('.totalLikesFrame').style.display = 'flex'

  const lightBox = document.getElementById('lightBox')
  const main = document.getElementById('main')
  const body = document.getElementById('body')
  lightBox.style.display = 'none'
  main.style.filter = 'blur(0px)'
  body.style.overflow = 'auto'
  main.style.pointerEvents = 'auto'
}

// Fermer la lightbox/modal-form avec la touche echap
window.onkeyup = function (event) {
  if (event.keyCode === 27) {
    closeLightBox()
    closeModal()
  }
}

// CREATION LIST

// CONTROL KEYBOARD

document.addEventListener('keydown', (e) => {
  const image = document.querySelector('.lightBox-image')
  const video = document.querySelector('.lightBox-image__video')
  const photographerName = document.querySelector('h1').innerHTML.split(' ')[0]
  if (lightBox.style.display !== 'flex') {
    return
  }
  switch (e.keyCode) {
    case 37:
      --currentImage < 0 && (currentImage = itemsList.sortList.length - 1)
      document.querySelector('.lightBox-title').innerHTML =
        itemsList.sortListName[currentImage]

      break
    case 39:
      ++currentImage > itemsList.sortList.length - 1 && (currentImage = 0)
      document.querySelector('.lightBox-title').innerHTML =
        itemsList.sortListName[currentImage]
      break
  }
  if (itemsList.sortList[currentImage].split('.')[1] === 'mp4') {
    video.setAttribute(
      'src',
      `assets/Sample Photos/${photographerName.replace('-', ' ')}/${
        itemsList.sortList[currentImage]
      }`
    )
    document.querySelector('.lightBox-image__img').title =
      itemsList.sortListName[currentImage]
    document.querySelector('.lightBox-image__video').style.display = 'block'
    document.querySelector('.lightBox-image__img').style.display = 'none'
  } else {
    image.setAttribute(
      'src',
      `assets/Sample Photos/${photographerName.replace('-', ' ')}/${
        itemsList.sortList[currentImage]
      }`
    )
    document.querySelector('.lightBox-image__img').alt =
      itemsList.sortListName[currentImage]
    document.querySelector('.lightBox-image__img').style.display = 'block'
    document.querySelector('.lightBox-image__video').style.display = 'none'
  }
})

// CONTROL ONCLICK

function goTo (direction) {
  const image = document.querySelector('.lightBox-image')
  const video = document.querySelector('.lightBox-image__video')
  const photographerName = document.querySelector('h1').innerHTML.split(' ')[0]
  if (lightBox.style.display !== 'flex') {
    return
  }
  switch (direction) {
    case 'previous':
      --currentImage < 0 && (currentImage = itemsList.sortList.length - 1)
      document.querySelector('.lightBox-title').innerHTML =
        itemsList.sortListName[currentImage]
      break
    case 'next':
      ++currentImage > itemsList.sortList.length - 1 && (currentImage = 0)
      document.querySelector('.lightBox-title').innerHTML =
        itemsList.sortListName[currentImage]
      break
  }
  if (itemsList.sortList[currentImage].split('.')[1] === 'mp4') {
    video.setAttribute(
      'src',
      `assets/Sample Photos/${photographerName.replace('-', ' ')}/${
        itemsList.sortList[currentImage]
      }`
    )
    document.querySelector('.lightBox-image__img').title =
      itemsList.sortListName[currentImage]
    document.querySelector('.lightBox-image__video').style.display = 'block'
    document.querySelector('.lightBox-image__img').style.display = 'none'
  } else {
    image.setAttribute(
      'src',
      `assets/Sample Photos/${photographerName.replace('-', ' ')}/${
        itemsList.sortList[currentImage]
      }`
    )
    document.querySelector('.lightBox-image__img').alt =
      itemsList.sortListName[currentImage]
    document.querySelector('.lightBox-image__img').style.display = 'block'
    document.querySelector('.lightBox-image__video').style.display = 'none'
  }
}

// eslint-disable-next-line no-unused-vars
function lightBoxPrevious () {
  goTo('previous')
}

// eslint-disable-next-line no-unused-vars
function lightBoxNext () {
  goTo('next')
}
