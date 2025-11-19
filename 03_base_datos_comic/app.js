const infoComic = document.querySelector(".hero")
const cardPersonajes = document.querySelector(".personajes")

console.log(infoComic)
console.log(cardPersonajes)

infoComic.innerHTML = `
<img src="./img/portada.png" alt="Portada del cómic">
    <div class="hero-info">
    <h2>${comic.nombreComic}</h2>
    <div class="meta-info">
        <span>${comic.year}</span> | <span>${comic.numeroCapitulos}</span> | <span>${comic.genero}</span>
    </div>
    <p>${comic.sinopsis}</p>
    <div class="hero-buttons">
    <button>Ver capítulo 1</button>
        <a href="#personajes" class="secondary-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        Más Info
        </a>
        </div>
    </div>
    </div>
`
        comic.personajes.forEach(char => {
        //Crear elementos dinamicacmete con JavaScript
        const div = document.createElement("div")
        div.classList.add("personaje")
        div.innerHTML = `
        <img src="${char.imagen}" alt="">
        <p>${char.nombre}</p>
        <p>${char.descripcion}</p>
        `

        cardPersonajes.appendChild(div)
});