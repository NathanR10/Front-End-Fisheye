function likes(id, likes) {
    var item = document.querySelector(`#like_${id}`)
    var count = document.querySelector(`#count_${id}`)
    const targetTotalLikes = document.querySelector('.totalLikes');
     // far fa-heart | fas fa-heart
    if (item.className === 'far fa-heart frame_heart') {
        item.className = 'fas fa-heart frame_heart'
        count.innerHTML = (parseInt(count.innerHTML) +1)
        // Incremente le total
        targetTotalLikes.innerHTML = parseInt(targetTotalLikes.innerHTML) + 1;
    } else {
        item.className = 'far fa-heart frame_heart'
        count.innerHTML = (parseInt(count.innerHTML) -1)
        // Decremente le total
        targetTotalLikes.innerHTML = parseInt(targetTotalLikes.innerHTML) - 1;
    }
}