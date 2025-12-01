
import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const miCapitulo = comic.capitulos.find(c => c.id === id);

console.log("El id del capitulo es:", id);

console.log("El capitulo encontrado es", miCapitulo);