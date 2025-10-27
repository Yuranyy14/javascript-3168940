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
