async function displayData (medias, name) {
  const mediasSection = document.querySelector('.media_section')
  medias.forEach((media, index) => {
    const mediaModel = mediaFactory(media, name, index + 4)
    const userCardDOM = mediaModel.getUserCardDOM()
    mediasSection.appendChild(userCardDOM)

    // Ouvre la lightbox avec la touche entrée
    userCardDOM.childNodes[0].addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        displayLightBox(
          typeof media.image === 'undefined' ? media.video : media.image
        )
      }
    })
    // Ajoute/retire un like avec la touche entrée
    const targetHeart = userCardDOM.childNodes[1].childNodes[1].childNodes[1]
    targetHeart.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        likes(media.id, media.likes)
      }
    })
  })
}

function createTitle (name, city, country, tagline) {
  // Génère le titre
  const targetElm = document.querySelector('.photograph-header-name')
  const nameTitle = document.createElement('h1')
  const location = document.createElement('h2')
  const description = document.createElement('p')
  nameTitle.textContent = name
  location.textContent = `${city}, ${country}`
  description.textContent = tagline
  // Place le titre en première posistion dans targetElm
  targetElm.insertBefore(nameTitle, targetElm.firstChild)
  targetElm.appendChild(location)
  targetElm.appendChild(description)
}

function createModalName (name) {
  // Génère le nom sur la modal
  const targetElm = document.querySelector('.modal-header')
  const h2 = document.createElement('h2')
  h2.textContent = name
  // Place le titre en première posistion dans targetElm
  targetElm.appendChild(h2)
}

function setupTotalLikes (price, medias) {
  // Remplace 0 par le prix de l'artiste
  const targetPrice = document.querySelector('.dayCost')
  const targetTotalLikes = document.querySelector('.totalLikes')
  targetPrice.innerHTML = price

  // Initialise le nombre total de like de l'artiste
  let getTotalLikes = 0

  // Pour chaque media, ajoute le nombre de like au total
  medias.forEach((item) => {
    getTotalLikes += item.likes
  })

  // Remplace 0 par le total de like
  targetTotalLikes.innerHTML = getTotalLikes
}

function createPicture (portrait, name) {
  // Génère la photo de profil
  const targetElm = document.querySelector('.photograph-header')
  const img = document.createElement('img')
  img.setAttribute('class', 'profilPicture')
  img.setAttribute('src', 'assets/photographers/' + portrait)
  img.setAttribute('alt', name)
  // place la photo à la dernière position dans targetElm
  return targetElm.appendChild(img)
}

async function init () {
  // Récupère l'id du photographe
  // Si plusieurs items -> URLSearchParams
  const photographerId = parseInt(window.location.href.split('?')[1])
  // const photographerId = new URLSearchParams(window.location.href)
  // Récupère les datas
  const { photographers, media } = await getData()

  // Récupère les données correspondantes à l'id du photographe
  let photographerData
  const mediaData = []
  photographers.forEach((photographer) => {
    photographer.id === photographerId && (photographerData = photographer)
  })
  // mediaData will only contain photographer corresponding data
  media.forEach((item) => {
    item.photographerId === photographerId && mediaData.push(item)
  })
  // send mediaData and photographer name for path (media.js)
  displayData(mediaData, photographerData.name)
  createTitle(
    photographerData.name,
    photographerData.city,
    photographerData.country,
    photographerData.tagline
  )
  createPicture(photographerData.portrait, photographerData.name)
  createModalName(photographerData.name)
  setupTotalLikes(photographerData.price, mediaData)
}

init()
