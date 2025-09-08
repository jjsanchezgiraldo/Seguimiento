function videojuego() {
  let personaje = prompt("Elige tu personaje (Guerrero, Mago, Arquero, Asesino): ").toLowerCase();
  let nivel = parseInt(prompt("Ingresa tu nivel actual (1-5): "));

  switch (personaje) {
    case "guerrero":
      console.log("Guerrero - Vida: 150 - Habilidad: Supergolpe");
      break;
    case "mago":
      console.log("Mago - Vida: 100 - Habilidad: Bola de materia obscura");
      break;
    case "arquero":
      console.log("Arquero - Vida: 120 - Habilidad: Flecha explosiva");
      break;
    case "asesino":
      console.log("Asesino - Vida: 110 - Habilidad: Sigilo");
      break;
    default:
      console.log("Personaje no válido");
      return;
  }

  
  switch (nivel) {
    case 1:
      console.log("Recompensa: Espada de madera");
      break;
    case 2:
      console.log("Recompensa: Escudo de hierro");
      break;
    case 3:
      console.log("Recompensa: Armadura de acero");
      break;
    case 4:
      console.log("Recompensa: Anillo mágico");
      break;
    case 5:
      console.log("Recompensa: Arma legendaria");
      break;
    default:
      console.log("Nivel inválido. Solo existen niveles del 1 al 5.");
  }

  console.log("Buena suerte en tu aventura");
}
videojuego();