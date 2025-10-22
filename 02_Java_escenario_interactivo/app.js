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