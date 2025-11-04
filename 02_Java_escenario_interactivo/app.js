// ---------- ESCENARIO 1: Tiburón ----------

// 1. Captura de variables
const corazones = document.querySelectorAll(".cora");
const peces = document.querySelectorAll(".pez");
const countCorazon = document.getElementById("countCorazon");
const countPez = document.getElementById("countPez");

let contadorCorazon = 0;
let contadorPez = 0;

// 2. Funciones
corazones.forEach(item => {
    item.addEventListener("click", () => {
        item.style.filter = "grayscale(1)";
        item.classList.add("saltar");
        sonidoCorazon.play();
        contadorCorazon++;
        countCorazon.textContent = contadorCorazon;
    });
});

peces.forEach(item => {
    item.addEventListener("click", () => {
        item.style.filter = "grayscale(1)";
        item.classList.add("saltar");
        sonidoPez.play();
        contadorPez++;
        countPez.textContent = contadorPez;
    });
});


// ---------- ESCENARIO 2: Gato-Alien ----------

// 1. Captura de variables
const vacas = document.querySelectorAll(".vaca");
const cerdos = document.querySelectorAll(".cerdo");
const countVaca = document.getElementById("countVaca");
const countPig = document.getElementById("countPig");

let contadorVaca = 0;
let contadorCerdo = 0;

// 2. Funciones
vacas.forEach(item => {
    item.addEventListener("click", () => {
        item.style.filter = "grayscale(1)";
        item.classList.add("saltar");
        sonidoOvni.play();
        contadorVaca++;
        countVaca.textContent = contadorVaca;
    });
});

cerdos.forEach(item => {
    item.addEventListener("click", () => {
        item.style.filter = "grayscale(1)";
        item.classList.add("saltar");
        sonidoOvni.play();
        contadorCerdo++;
        countPig.textContent = contadorCerdo;
    });
});


// ---------- ESCENARIO 3: Araña ----------

// 1. Captura de variables
const insectos = document.querySelectorAll(".insecto1, .insecto2, .insecto3, .insecto4");
const countInsecto = document.getElementById("countInsecto");

let contadorInsecto = 0;

// 2. Funciones
insectos.forEach(item => {
    item.addEventListener("click", () => {
        item.style.filter = "grayscale(1)";
        item.classList.add("saltar");
        sonidoBicho.play();
        contadorInsecto++;
        countInsecto.textContent = contadorInsecto;
    });
});


// Carruzel

//1. Variables
const escenas = document.querySelectorAll(".esc");
const anterior = document.querySelector("#prev");
const siguiente = document.querySelector("#next");
const miniaturas = document.querySelectorAll(".miniatura-item"); 
let indice = 0;

// 2. Funciones
function mostrarEscena(i){
    escenas.forEach(esc => esc.classList.remove("escenarioActivo"));
    escenas[i].classList.add("escenarioActivo");

    miniaturas.forEach(min => min.classList.remove("activo"));
    miniaturas[i].classList.add("activo");

    indice = i;
}
//Para mostrar la pantalla 1 al iniciar
mostrarEscena(0);

anterior.addEventListener("click", function(){
    indice--;
    if(indice < 0){ //Para siguiente if(indice >= escenas.leight)
        indice = escenas.length - 1; // Va a la última imagen
    }
    mostrarEscena(indice);
});


siguiente.addEventListener("click", function(){
    indice++;
    if(indice >= escenas.length){ //Para siguiente if(indice >= escenas.leight)
        indice = 0; //Va a la ultima imagen
    }
    mostrarEscena(indice);
});


miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", function() {
        const newIndex = parseInt(this.getAttribute("data-index"));
        mostrarEscena(newIndex);
    });
});

//-----Sonidos -----
const sonidoCorazon = document.getElementById("sncora")
const sonidoPez = document.getElementById("snpez")
const sonidoOvni = document.getElementById("snovni")
const sonidoBicho = document.getElementById("snbicho")
