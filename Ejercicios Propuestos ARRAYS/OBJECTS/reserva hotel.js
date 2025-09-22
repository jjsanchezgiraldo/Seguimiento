let reservas = [];

function reservar(nombre, pais, tipo, fumador, personas, mascota) {
  const reserva = { nombre, pais, tipo, fumador, personas, mascota };

  let capacidad = tipo === "individual" ? 2 : tipo === "doble" ? 4 : 6;
  if (personas > capacidad) return "Excede capacidad";

  if (mascota === "sí" && tipo !== "familiar") return "Solo se aceptan mascotas en familiar";

  reservas.push(reserva);
  return "Reserva registrada";
}

function simulacionHotel() {
  const salida = document.getElementById("salida");

  let nombre = prompt("Nombre:");
  let pais = prompt("País:");
  let tipo = prompt("Tipo (individual/doble/familiar):");
  let fumador = prompt("Fumador (sí/no):");
  let personas = parseInt(prompt("Número de personas:"));
  let mascota = prompt("Mascota (sí/no):");

  salida.textContent = reservar(nombre, pais, tipo, fumador, personas, mascota) +
    "\nTotal reservas: " + reservas.length;
}

