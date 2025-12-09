import { comic } from "./bd.js";

const heroContainer = document.getElementById("inicio");
const capitulosCard = document.getElementById("capitulosCard");
const personajesCard = document.getElementById("personajesCard");


if (heroContainer) {
    heroContainer.innerHTML = `
        <img src="./img/${comic.portadaComic}" alt="Portada del cómic">
        <div class="hero-info">
            <h2>${comic.nombreComic}</h2>
            <div class="meta-info">
                <span>${comic.year}</span> | 
                <span>${comic.numeroCapitulos} Capítulos</span> | 
                <span>${comic.genero.join('/')}</span>
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
    `;
}

comic.capitulos.forEach(capitulo => {
    capitulosCard.innerHTML += `
        <a href="./capitulos.html?id=${capitulo.id}"> 
            <div class="card">
                <img src="./img/${capitulo.portada}" alt="${capitulo.nombre}">
                <h3>${capitulo.nombre}</h3>
                <p>${capitulo.descripcion}</p>
            </div>
        </a> `;
});



comic.personajes.forEach(char => {
    const div = document.createElement("div");
    div.classList.add("card");
    
    div.innerHTML = `
        <a href="./personajes.html?id=${char.id}">
            <img src="${char.imagen}" alt="${char.nombre}">
            <h3>${char.nombre}</h3>
            <p>${char.descripcion}</p>
        </a>
    `;
    
    personajesCard.appendChild(div);
});