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
    contadorCorazon++;
    countCorazon.textContent = contadorCorazon;
  });
});

peces.forEach(item => {
  item.addEventListener("click", () => {
    item.style.filter = "grayscale(1)";
    item.classList.add("saltar");
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
    contadorVaca++;
    countVaca.textContent = contadorVaca;
  });
});

cerdos.forEach(item => {
  item.addEventListener("click", () => {
    item.style.filter = "grayscale(1)";
    item.classList.add("saltar");
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
    contadorInsecto++;
    countInsecto.textContent = contadorInsecto;
  });
});


// Carruzel

//1. Variables
const escenas = document.querySelectorAll(".esc")
const anterior = document.querySelector("#prev")
const siguiente = document.querySelector("#next")
const miniaturas = document.querySelectorAll(".miniatura")
let indice = 0

console.log(escenas)
console.log(anterior)
console.log(siguiente)
console.log(miniaturas)

//2. Funciones
function mostrarEscena(i){
  //Asigna la calse escena a todas las pantallas
  for (let j = 0; j < escenas.length; j++) {
    escenas[j].classList.remove("escenarioActivo")
    
  }

  escenas[i].classList.add("escenarioActivo")

  indice = i
}
//Para mostrar la pantalla 1 al iniciar
mostrarEscena(0)

anterior.addEventListener("click", function(){
  indice = indice - 1
  if(indice < 0){ //Para siguiente if(indice >= escenas.leight)
    indice = escenas.length - 1 //Va a la ultima imagen
  }
  mostrarEscena(indice)
})

siguiente.addEventListener("click", function(){
  indice = indice + 1
  if(indice >= escenas.length){ //Para siguiente if(indice >= escenas.leight)
    indice = 0 //Va a la ultima imagen
  }
  mostrarEscena(indice)
})   