// eslint-disable-next-line no-unused-vars
function photographerFactory (data) {
  const { name, portrait, city, country, price, tagline, id } = data

  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM () {
    // Génère un article avec les informations des différents photographes
    const article = document.createElement('article')
    const link = document.createElement('a')
    const frame = document.createElement('div')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const pLocation = document.createElement('p')
    const pTagline = document.createElement('p')
    const pPrice = document.createElement('p')

    link.setAttribute('href', `./photographer.html?${id}`)
    link.setAttribute('class', 'selectHelper')
    frame.setAttribute('class', 'frame')
    img.setAttribute('src', picture)
    img.setAttribute('alt', name)
    pLocation.setAttribute('class', 'pLocation')
    pTagline.setAttribute('class', 'pTagline')
    pPrice.setAttribute('class', 'pPrice')

    h2.textContent = name
    pLocation.textContent = `${city}, ${country}`
    pTagline.textContent = tagline
    pPrice.textContent = `${price}€/jour`

    article.appendChild(link)
    link.appendChild(frame)
    frame.appendChild(img)
    article.appendChild(h2)
    article.appendChild(pLocation)
    article.appendChild(pTagline)
    article.appendChild(pPrice)
    return article
  }
  return { name, picture, getUserCardDOM }
}
