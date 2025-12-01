//"Configuracion ESModules 2611"

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

//Comparar id de URL con id de la base de datos
const miPersonaje = comic.personajes.find( p => p.id === id); 

//console.log("El personaje encontrado es:")
console.log("El id del personaje es:", id);

console.log("El personaje encontrado es", miPersonaje); 