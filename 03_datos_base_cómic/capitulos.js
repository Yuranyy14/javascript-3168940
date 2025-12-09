import { comic } from './bd.js';

const params = new window.URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

const miCapitulo = comic.capitulos.find(c => c.id === id);
const containerCapitulos = document.querySelector('.contenido-capitulo');

if (miCapitulo) {
    const capituloHTML = ` 
        <div class="capitulo-detail-view">
            
            <div class="capitulo-card-container">
                <div class="card-capitulo active-view" data-capitulo-id="${miCapitulo.id}">
                    <img src="${miCapitulo.imagen}" alt="Imagen del Capítulo ${miCapitulo.id}" class="capitulo-img">
                    <div class="capitulo-nombre">${miCapitulo.nombre || miCapitulo.titulo}</div> 
                </div>
            </div>

            <div class="capitulo-info-static">
                <div class="title">Resumen del capítulo</div> 
                
                <div class="info-details" style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
                    <div class="info-line"></div>
                    <div class="info-line short"></div>
                    <p>
                        ${miCapitulo.descripcion || miCapitulo.resumen || 'Información no disponible.'}
                    </p>
                </div>
            </div>
        </div>
    `;
    
    containerCapitulos.innerHTML = capituloHTML;

} 