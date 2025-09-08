function seleccionarLavado() {
  let programa = parseInt(prompt(
    "Selecciona programa de lavado:\n" +
    "1. Rápido (30min - $5)\n" +
    "2. Normal (45min - $7)\n" +
    "3. Pesado (60min - $10)\n" +
    "4. Delicado (40min - $8)\n" +
    "Ingresa el número de tu elección: "
  ));

  switch (programa) {
    case 1:
      console.log("Programa seleccionado: RÁPIDO");
      console.log("Duración: 30 minutos");
      console.log("Precio: $5");
      break;
    case 2:
      console.log("Programa seleccionado: NORMAL");
      console.log("Duración: 45 minutos");
      console.log("Precio: $7");
      break;
    case 3:
      console.log("Programa seleccionado: PESADO");
      console.log("Duración: 60 minutos");
      console.log("Precio: $10");
      break;
    case 4:
      console.log("Programa seleccionado: DELICADO");
      console.log("Duración: 40 minutos");
      console.log("Precio: $8");
      break;
    default:
      console.log("Opción inválida. Debes elegir entre 1 y 4.");
  }
}
seleccionarLavado();