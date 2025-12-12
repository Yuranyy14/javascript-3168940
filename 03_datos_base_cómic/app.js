import { comic } from "./bd.js";

const heroContainer = document.getElementById("inicio");
const carruselInner = document.getElementById("carruselInner");
const heroInfo = document.getElementById("heroInfo");
const capitulosCard = document.getElementById("capitulosCard");
const personajesCard = document.getElementById("personajesCard");

// CARRUSEL DE IMÁGENES

if (heroContainer && carruselInner && heroInfo) {
    comic.imagenesCarrusel.forEach(imagen => {
        carruselInner.innerHTML += `
            <div class="carrusel-item">
                <img src="${imagen}" alt="Imagen del cómic">
            </div>
        `;
    });

    //  info  cómic
    heroInfo.innerHTML = `
        <h2>${comic.nombreComic}</h2>
        <div class="meta-info">
            <span>${comic.year}</span> | 
            <span>${comic.numeroCapitulos} Capítulos</span> | 
            <span>${comic.genero.join('/')}</span>
        </div>
        <p>${comic.sinopsis}</p>
        <div class="hero-buttons">
            <a href="./capitulos.html?id=1"><button>Ver capítulo 1</button></a>
            <a href="#personajes" class="secondary-button">Personajes</button>
            </a>
        </div>
    `;

    // carrusel (cambio)
    let currentIndex = 0;
    const items = document.querySelectorAll('.carrusel-item');
    const totalItems = items.length;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        const offset = -currentIndex * 100;
        carruselInner.style.transform = `translateX(${offset}%)`;
    }, 5000); 
}




//  capitulos
comic.capitulos.forEach(capitulo => {
    capitulosCard.innerHTML += `
        <a href="./capitulos.html?id=${capitulo.id}" class="float-card"> 
            <div class="card">
                <img src="${capitulo.portada}" alt="${capitulo.nombre}">
                <h3>${capitulo.nombre}</h3>
                <p>${capitulo.descripcion}</p>
            </div>
        </a> `;
});

// personajes
comic.personajes.forEach(char => {
    personajesCard.innerHTML += `
        <a href="./personajes.html?id=${char.id}" class="float-card">
            <div class="card">
                <img src="${char.imagen}" alt="${char.nombre}">
                <h3>${char.nombre}</h3>
                <p>${char.descripcion}</p>
            </div>
        </a>
    `;
});


// animacion inicio
function handleScrollAnimation() {
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    elementsToAnimate.forEach(element => {
        const triggerBottom = window.innerHeight * 0.85; 
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('visible');
        } else { 
        }
    });
}


window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation); 