// eslint-disable-next-line no-unused-vars
function likes (id, likes) {
  const item = document.querySelector(`#like_${id}`)
  const count = document.querySelector(`#count_${id}`)
  const targetTotalLikes = document.querySelector('.totalLikes')
  // far fa-heart | fas fa-heart
  if (item.className.split(' ')[0] === 'far') {
    item.className = 'fas ' + item.className.slice(4)
    count.innerHTML = parseInt(count.innerHTML) + 1
    // Incremente le total
    targetTotalLikes.innerHTML = parseInt(targetTotalLikes.innerHTML) + 1
  } else {
    item.className = 'far ' + item.className.slice(4)
    count.innerHTML = parseInt(count.innerHTML) - 1
    // Decremente le total
    targetTotalLikes.innerHTML = parseInt(targetTotalLikes.innerHTML) - 1
  }
}
