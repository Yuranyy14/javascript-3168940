// Escenario 1

// 1. captura de variables
const corazon = document.querySelectorAll(".cora")
const tablero = document.querySelector(".contadorCorazon")
let counter = 0 

console.log(corazon, tablero)

// 2. funciones 
corazon.forEach( item => {
    
    item.addEventListener("click", () => {
        item.style.filter = "grayscale(1)"
        item.classList.add("saltar")
        counter++
        tablero.textContent = counter
    })

    })


// 3. Eventos 


//Escenario 2
// 1. captura de variables
const vaca = document.querySelectorAll(".vaca")
const cerdo = document.querySelectorAll(".cerdo")
const tableroVca = document.querySelector(".countVaca")
const tableroCrdo = document.querySelector(".countPig")
let counterV = 0 

console.log(vaca, tableroVca, cerdo, tableroCrdo)

// 2. funciones 
vaca.forEach( item => {
    
    item.addEventListener("click", () => {
        item.style.filter = "grayscale(1)"
        item.classList.add("saltar")
        counter++
        tableroVca.textContent = counter
    })

    })

    cerdo.forEach( item => {
    
    item.addEventListener("click", () => {
        item.style.filter = "grayscale(1)"
        item.classList.add("saltar")
        counter++
        tableroCrdo.textContent = counter
    })

    })


// 3. Eventos 
