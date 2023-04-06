const h1header = document.getElementById("header-container")
const elementoh1 = document.createElement("h1")
console.log(h1header)
console.log(elementoh1)

h1header.appendChild(elementoh1)

elementoh1.textContent = "Pruebas"


/* Ejercicio 2 */

const mainContainer = document.getElementById("main-container")
const botonMain = document.createElement("button")
console.log(mainContainer)
console.log(botonMain)

mainContainer.appendChild(botonMain)

botonMain.classList.add("estilosBoton")

botonMain.addEventListener("click", () => {
    console.log("Me diste click")
    botonMain.style.backgroundColor = "blue"
    botonMain.style.scale = 0.2
})

botonMain.addEventListener("mouseout", () => {
    botonMain.style.backgroundColor = "aqua"
    botonMain.style.scale = 1
})