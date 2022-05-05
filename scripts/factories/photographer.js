function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline/*, id*/ } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const pLocation = document.createElement( 'p' );
        const pTagline = document.createElement( 'p' );
        const pPrice = document.createElement( 'p' );
        img.setAttribute("src", picture)
        pLocation.setAttribute("class", "pLocation")
        pTagline.setAttribute("class", "pTagline")
        pPrice.setAttribute("class", "pPrice")
        h2.textContent = name;
        pLocation.textContent = city + ', ' + country;
        pTagline.textContent = tagline;
        pPrice.textContent = price + '€/jour';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pLocation);
        article.appendChild(pTagline);
        article.appendChild(pPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}