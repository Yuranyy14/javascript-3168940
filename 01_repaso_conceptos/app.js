
const imagen = document.getElementById("meowl");


function aplicarBlancoNegro() {
  imagen.classList.toggle("blancoNegro");
}


function aplicarDesenfoque() {
  imagen.classList.toggle("desenfocar");
}


function aplicarZoomYRotar() {
  if (imagen.classList.contains("zoomRotar")) {
    imagen.classList.remove("zoomRotar");
  } else {
    imagen.classList.add("zoomRotar");
  }
}


document.getElementById("btnBN").addEventListener("click", aplicarBlancoNegro);
document.getElementById("btnDesenfocar").addEventListener("click", aplicarDesenfoque);
document.getElementById("btnZoomRotar").addEventListener("click", aplicarZoomYRotar);
