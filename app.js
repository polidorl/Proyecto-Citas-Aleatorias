

// Seleccionar elementos del DOM
let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

// Función para generar un número entero aleatorio
function generarEnteroAleatorio(max) {
    return Math.floor(Math.random() * max); // Genera un número entre 0 y max-1
}

// Función para cambiar la cita
function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(citas.length); // Obtiene un índice aleatorio
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`; // Muestra la cita
    autorElem.innerText = citas[indiceAleatorio].autor; // Muestra el autor
}

// Mostrar una cita al cargar la página
cambiarCita();

// Cambiar cita al hacer clic en el botón
botonElem.addEventListener('click', cambiarCita);