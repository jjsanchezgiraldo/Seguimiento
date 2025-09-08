function planesInternet() {
  let plan = parseInt(prompt(
    "Selecciona tu plan de internet:\n1. Básico (20MB - $15)\n2. Intermedio (50MB - $30)\n3. Premium (100MB - $50)"
  ));

  switch(plan) {
    case 1:
      alert("Has elegido el Plan Básico\nVelocidad: 20MB\nPrecio: $15\nCaracterísticas: Ideal para navegación y redes sociales.");
      break;
    case 2:
      alert("Has elegido el Plan Intermedio \nVelocidad: 50MB\nPrecio: $30\nCaracterísticas: Perfecto para streaming y Video juegos.");
      break;
    case 3:
      alert("Has elegido el Plan Premium\nVelocidad: 100MB\nPrecio: $50\nCaracterísticas: Recomendado para múltiples dispositivos y todas las tareas necesarias en línea.");
      break;
    default:
      alert("Opción no válida, selecciona entre 1 y 3.");
  }
}
planesInternet();
