// Definir las figuras para los rodillos
const figuras = ["🍒", "🍋", "🔔", "🍇", "💎", "7️⃣", "⭐", "🍉", "🍍", "🃏"];

// Función para girar los rodillos
function girarRodillo() {
    return figuras[Math.floor(Math.random() * figuras.length)];
}

// Función principal para girar la máquina
function girarMaquina() {
    // Obtener referencias a los elementos de los rodillos
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    // Girar cada rodillo y actualizar la visualización
    const resultado1 = girarRodillo();
    const resultado2 = girarRodillo();
    const resultado3 = girarRodillo();

    reel1.innerHTML = resultado1;
    reel2.innerHTML = resultado2;
    reel3.innerHTML = resultado3;

    // Verificar si todas las figuras del medio son iguales
    if (resultado1 === resultado2 && resultado1 === resultado3) {
        alert("¡Premio!");
    } else {
        alert("Sin premio, sigue intentando.");
    }
}

// Añadir evento al botón para girar los rodillos
document.getElementById('spinButton').addEventListener('click', girarMaquina);