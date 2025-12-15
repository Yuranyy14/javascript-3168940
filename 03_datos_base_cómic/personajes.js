import { comic } from './bd.js';

const params = new window.URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

if (!id || isNaN(id) || !comic.personajes.some(p => p.id === id)) {
    window.location.href = './index.html'; 
}

const miPersonaje = comic.personajes.find(c => c.id === id);
const containerPersonaje = document.querySelector('.contenido-personaje');


if (miPersonaje) {
 const personajeHTML = ` 
<div class="personaje-detail-view fade-in visible"> <div class="personaje-card-container">
 <div class="card-personaje active-view" data-personaje-id="${miPersonaje.id}">
 <img src="${miPersonaje.imagen}" alt="${miPersonaje.nombre}" class="personaje-img">
 <div class="personaje-nombre">${miPersonaje.nombre}</div>
 </div>
 </div>

 <div class="personaje-info-static">
 <div class="title">Info del personaje</div>
 
 <div class="info-details" style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
 <div class="info-line"></div>
 <div class="info-line short"></div>
 <p>
 ${miPersonaje.descripcion || 'Información no disponible.'}
 </p>
</div>
 </div>
</div>
 `;

 
 containerPersonaje.innerHTML = personajeHTML;
}