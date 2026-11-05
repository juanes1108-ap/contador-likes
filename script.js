// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const cuerpoTabla = document.getElementById("tabla-cuerpo");

let likes = 0;

boton.addEventListener("click", () => {
    likes++;
    textoContador.textContent = likes; 

    // Reto 2: Cambiar el color si supera los 10 likes
    if (likes > 10) {
        textoContador.style.color = "#e74c3c"; // Color rojo o el que prefieras al superar 10
    } else {
        textoContador.style.color = "#3498db"; // Color azul original si es 10 o menos
    }

    // Código previo de la hora y la tabla...
    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString();

    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
        <td>${likes}</td>
        <td>${horaFormateada}</td>
    `;
    cuerpoTabla.insertBefore(nuevaFila, cuerpoTabla.firstChild);
});
// Capturar el nuevo botón
const botonReset = document.getElementById("btn-reset");

// Evento para reiniciar
botonReset.addEventListener("click", () => {
    likes = 0;
    textoContador.textContent = likes;
    cuerpoTabla.innerHTML = ""; // Limpia todas las filas de la tabla
});

