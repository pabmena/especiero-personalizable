// Seleccionar elementos del DOM
const canvas = document.getElementById('especieroCanvas');
const ctx = canvas.getContext('2d');

const colorEspeciero = document.getElementById('colorEspeciero');
const mismoColor = document.getElementById('mismoColor');
const colorTodasEtiquetas = document.getElementById('colorTodasEtiquetas');
const nombreFrasco1 = document.getElementById('nombreFrasco1');
const colorEtiqueta1 = document.getElementById('colorEtiqueta1');
const nombreFrasco2 = document.getElementById('nombreFrasco2');
const colorEtiqueta2 = document.getElementById('colorEtiqueta2');
const nombreFrasco3 = document.getElementById('nombreFrasco3');
const colorEtiqueta3 = document.getElementById('colorEtiqueta3');
const nombreFrasco4 = document.getElementById('nombreFrasco4');
const colorEtiqueta4 = document.getElementById('colorEtiqueta4');
const nombreFrasco5 = document.getElementById('nombreFrasco5');
const colorEtiqueta5 = document.getElementById('colorEtiqueta5');
const nombreFrasco6 = document.getElementById('nombreFrasco6');
const colorEtiqueta6 = document.getElementById('colorEtiqueta6');

// Función para dibujar el especiero y los frascos
function dibujarEspeciero() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el especiero (900px x 115px)
    ctx.fillStyle = colorEspeciero.value;
    ctx.fillRect(50, 30, 805, 135);  // Especiero

    // Determinar el color de las etiquetas
    const color1 = mismoColor.checked ? colorTodasEtiquetas.value : colorEtiqueta1.value;
    const color2 = mismoColor.checked ? colorTodasEtiquetas.value : colorEtiqueta2.value;
    const color3 = mismoColor.checked ? colorTodasEtiquetas.value : colorEtiqueta3.value;
    const color4 = mismoColor.checked ? colorTodasEtiquetas.value : colorEtiqueta4.value;
    const color5 = mismoColor.checked ? colorTodasEtiquetas.value : colorEtiqueta5.value;
    const color6 = mismoColor.checked ? colorTodasEtiquetas.value : colorEtiqueta6.value;

    // Dibujar los frascos
    dibujarFrasco(70, 65, nombreFrasco1.value, color1);
    dibujarFrasco(200, 65, nombreFrasco2.value, color2);
    dibujarFrasco(330, 65, nombreFrasco3.value, color3);
    dibujarFrasco(460, 65, nombreFrasco4.value, color4);
    dibujarFrasco(590, 65, nombreFrasco5.value, color5);
    dibujarFrasco(720, 65, nombreFrasco6.value, color6);
}

// Función para dibujar un frasco
function dibujarFrasco(x, y, nombre, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 120, 50);  // Etiqueta del frasco más rectangular

    // Usar la fuente alternativa para Felix Titling
    ctx.fillStyle = "#000";
    ctx.font = "20px 'Roboto Slab', serif";  // Tamaño de letra ajustado y fuente
    const nombreEnLineas = dividirTexto(nombre || "Frasco", 10);  // 10 caracteres máximo por línea
    nombreEnLineas.forEach((linea, index) => {
        ctx.fillText(linea, x + 5, y + 30 + (index * 15));  // Máximo 2 líneas
    });
}

// Función para dividir el texto en múltiples líneas si es necesario
function dividirTexto(texto, longitudMaxima) {
    const lineas = [];
    let lineaActual = '';
    texto.split(' ').forEach((palabra) => {
        if ((lineaActual + palabra).length > longitudMaxima) {
            lineas.push(lineaActual.trim());
            lineaActual = palabra + ' ';
        } else {
            lineaActual += palabra + ' ';
        }
    });
    lineas.push(lineaActual.trim());
    return lineas.slice(0, 2);  // Limitar a 2 líneas
}

// Añadir event listeners para actualizar el canvas
colorEspeciero.addEventListener('input', dibujarEspeciero);
mismoColor.addEventListener('change', dibujarEspeciero);
colorTodasEtiquetas.addEventListener('input', dibujarEspeciero);
nombreFrasco1.addEventListener('input', dibujarEspeciero);
colorEtiqueta1.addEventListener('input', dibujarEspeciero);
nombreFrasco2.addEventListener('input', dibujarEspeciero);
colorEtiqueta2.addEventListener('input', dibujarEspeciero);
nombreFrasco3.addEventListener('input', dibujarEspeciero);
colorEtiqueta3.addEventListener('input', dibujarEspeciero);
nombreFrasco4.addEventListener('input', dibujarEspeciero);
colorEtiqueta4.addEventListener('input', dibujarEspeciero);
nombreFrasco5.addEventListener('input', dibujarEspeciero);
colorEtiqueta5.addEventListener('input', dibujarEspeciero);
nombreFrasco6.addEventListener('input', dibujarEspeciero);
colorEtiqueta6.addEventListener('input', dibujarEspeciero);

// Dibujar la inicialización del especiero
dibujarEspeciero();








