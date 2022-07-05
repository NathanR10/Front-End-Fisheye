function mediaFactory(data, name, index) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    const photographerName = name.split(' ')[0].replace('-', ' ');

    //test if media is an image or a video
    if (typeof image !== 'undefined') {
        const target = `./assets/Sample Photos/${photographerName}/${image}`;
        function getUserCardDOM() {
            const frame = document.createElement( 'div' );
            const frame_image = document.createElement( 'img' );
            const frame_title = document.createElement( 'div' );
            const frame_label = document.createElement( 'p' );
            const frame_like = document.createElement( 'div' );
            const frame_count = document.createElement( 'span' );
            const frame_heart = document.createElement( 'i' );
    
            frame.setAttribute("class", "mediaFrame");
            frame_image.setAttribute("onclick", `displayLightBox('${image}')`);
            frame_image.ariaLabel = "Aperçu de l'image, appuyez sur la touche entrée pour l'afficher en plein écran";
            frame_image.setAttribute("src", target);
            frame_image.setAttribute("titleorder", title);
            frame_image.setAttribute("dateorder", date);
            frame_image.setAttribute("class", "frame_image");
            frame_image.setAttribute("alt", title);
            frame_image.setAttribute("tabindex", index);
            frame_title.setAttribute("class", "frame_title");
            frame_label.setAttribute("class", "frame_label");
            frame_like.setAttribute("class", "frame_like");
            frame_count.setAttribute("class", "frame_count");
            frame_count.setAttribute("id", `count_${id}`)
            frame_heart.setAttribute("class", "far fa-heart frame_heart");
            frame_heart.setAttribute("id", `like_${id}`);
            frame_heart.setAttribute("onclick", `likes(${id}, ${likes})`);
            frame_heart.ariaLabel = "Appuyez sur la touche entrée pour ajouter ou retirer votre j'aime";
            frame_heart.setAttribute("tabindex", index);
    
            frame_label.textContent = title;
            frame_count.textContent = likes;
    
            frame.appendChild(frame_image);
            frame.appendChild(frame_title);
            frame_title.appendChild(frame_label);
            frame_title.appendChild(frame_like);
            frame_like.appendChild(frame_count);
            frame_like.appendChild(frame_heart);

            frame.style.order = index;
            return (frame);
        }
        return { title, image, getUserCardDOM }
    } else {
        const target = `./assets/Sample Photos/${photographerName}/${video}`;
        function getUserCardDOM() {
            const frame = document.createElement( 'div' );
            const frame_video = document.createElement( 'video' );
            const frame_title = document.createElement( 'div' );
            const frame_label = document.createElement( 'p' );
            const frame_like = document.createElement( 'div' );
            const frame_count = document.createElement( 'span' );
            const frame_heart = document.createElement( 'span' );
    
            frame.setAttribute("class", "mediaFrame");
            frame_video.setAttribute("onclick", `displayLightBox('${video}')`);
            frame_video.ariaLabel = "Aperçu de la vidéo, appuyez sur la touche entrée pour l'afficher en plein écran";
            frame_video.setAttribute("src", target);
            frame_video.setAttribute("titleorder", title);
            frame_video.setAttribute("dateorder", date);
            frame_video.setAttribute("class", "frame_image");
            frame_video.setAttribute("type", "video/mp4");
            frame_video.setAttribute("title", title);
            frame_video.setAttribute("tabindex", index);
            frame_title.setAttribute("class", "frame_title");
            frame_label.setAttribute("class", "frame_label");
            frame_like.setAttribute("class", "frame_like");
            frame_count.setAttribute("class", "frame_count");
            frame_count.setAttribute("id", `count_${id}`)
            frame_heart.setAttribute("class", "far fa-heart frame_heart");
            frame_heart.setAttribute("id", `like_${id}`)
            frame_heart.setAttribute("onclick", `likes(${id}, ${likes})`);
            frame_heart.ariaLabel = "Appuyez sur la touche entrée pour ajouter ou retirer votre j'aime";
            frame_heart.setAttribute("tabindex", index);
    
            frame_label.textContent = title;
            frame_count.textContent = likes;
    
            frame.appendChild(frame_video);
            frame.appendChild(frame_title);
            frame_title.appendChild(frame_label);
            frame_title.appendChild(frame_like);
            frame_like.appendChild(frame_count);
            frame_like.appendChild(frame_heart);

            frame.style.order = index;
            return (frame);
        }
        return { title, video, getUserCardDOM }
    }
}