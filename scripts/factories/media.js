// eslint-disable-next-line no-unused-vars
function mediaFactory (data, name, index) {
  const { id, title, image, video, likes, date /* photographerId, price */ } = data
  const photographerName = name.split(' ')[0].replace('-', ' ')

  // test if media is an image or a video
  if (typeof image !== 'undefined') {
    const target = `./assets/Sample Photos/${photographerName}/${image}`
    function getUserCardDOM () {
      const frame = document.createElement('div')
      const frameImage = document.createElement('img')
      const frameTitle = document.createElement('div')
      const frameLabel = document.createElement('p')
      const frameLike = document.createElement('div')
      const frameCount = document.createElement('span')
      const frameHeart = document.createElement('i')

      frame.setAttribute('class', 'mediaFrame')
      frameImage.setAttribute('onclick', `displayLightBox('${image}')`)
      frameImage.ariaLabel = 'Image: ' + title
      frameImage.setAttribute('src', target)
      frameImage.setAttribute('titleorder', title)
      frameImage.setAttribute('dateorder', date)
      frameImage.setAttribute('class', 'frame_image selectHelper')
      frameImage.setAttribute('alt', title)
      frameImage.setAttribute('tabindex', index)
      frameTitle.setAttribute('class', 'frame_title')
      frameLabel.setAttribute('class', 'frame_label')
      frameLike.setAttribute('class', 'frame_like')
      frameCount.setAttribute('class', 'frame_count')
      frameCount.setAttribute('id', `count_${id}`)
      frameHeart.setAttribute(
        'class',
        'far fa-heart frame_heart selectHelper'
      )
      frameHeart.setAttribute('id', `like_${id}`)
      frameHeart.setAttribute('onclick', `likes(${id}, ${likes})`)
      frameHeart.ariaLabel = "Ajouter un j'aime à: " + title
      frameHeart.setAttribute('tabindex', index)

      frameLabel.textContent = title
      frameCount.textContent = likes

      frame.appendChild(frameImage)
      frame.appendChild(frameTitle)
      frameTitle.appendChild(frameLabel)
      frameTitle.appendChild(frameLike)
      frameLike.appendChild(frameCount)
      frameLike.appendChild(frameHeart)

      frame.style.order = index
      return frame
    }
    return { title, image, getUserCardDOM }
  } else {
    const target = `./assets/Sample Photos/${photographerName}/${video}`
    function getUserCardDOM () {
      const frame = document.createElement('div')
      const frameVideo = document.createElement('video')
      const frameTitle = document.createElement('div')
      const frameLabel = document.createElement('p')
      const frameLike = document.createElement('div')
      const frameCount = document.createElement('span')
      const frameHeart = document.createElement('span')

      frame.setAttribute('class', 'mediaFrame')
      frameVideo.setAttribute('onclick', `displayLightBox('${video}')`)
      frameVideo.ariaLabel = 'Video: ' + title
      frameVideo.setAttribute('src', target)
      frameVideo.setAttribute('titleorder', title)
      frameVideo.setAttribute('dateorder', date)
      frameVideo.setAttribute('class', 'frame_image selectHelper')
      frameVideo.setAttribute('type', 'video/mp4')
      frameVideo.setAttribute('title', title)
      frameVideo.setAttribute('tabindex', index)
      frameTitle.setAttribute('class', 'frame_title')
      frameLabel.setAttribute('class', 'frame_label')
      frameLike.setAttribute('class', 'frame_like')
      frameCount.setAttribute('class', 'frame_count')
      frameCount.setAttribute('id', `count_${id}`)
      frameHeart.setAttribute(
        'class',
        'far fa-heart frame_heart selectHelper'
      )
      frameHeart.setAttribute('id', `like_${id}`)
      frameHeart.setAttribute('onclick', `likes(${id}, ${likes})`)
      frameHeart.ariaLabel = "Ajouter un j'aime à: " + title
      frameHeart.setAttribute('tabindex', index)

      frameLabel.textContent = title
      frameCount.textContent = likes

      frame.appendChild(frameVideo)
      frame.appendChild(frameTitle)
      frameTitle.appendChild(frameLabel)
      frameTitle.appendChild(frameLike)
      frameLike.appendChild(frameCount)
      frameLike.appendChild(frameHeart)

      frame.style.order = index
      return frame
    }
    return { title, video, getUserCardDOM }
  }
}
