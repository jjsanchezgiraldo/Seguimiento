let reservas = []; // [nombre, pais, tipo, fumador, personas, mascota]

function reservar(nombre, pais, tipo, fumador, personas, mascota) {
  let capacidad = tipo === "individual" ? 2 : tipo === "doble" ? 4 : 6;
  if (personas > capacidad) return "Error: excede la capacidad de la habitación.";
  if (mascota === "sí" && tipo !== "familiar") return "Error: solo se aceptan mascotas en familiar.";

  reservas = [...reservas, [nombre, pais, tipo, fumador, personas, mascota]];
  return " Reserva registrada con éxito.";
}

function contarReservas() {
  return reservas.length;
}

function verReservas() {
  if (reservas.length === 0) return "No hay reservas registradas.";
  return reservas
    .map(r =>
      `${r[0]} (${r[1]}) → Habitación: ${r[2]}, Fumador: ${r[3]}, Personas: ${r[4]}, Mascota: ${r[5]}`
    )
    .join("\n");
}

function simulacionHotel() {
  const salida = document.getElementById("salida");
  let continuar = true;

  while (continuar) {
    let nombre = prompt("Nombre:");
    let pais = prompt("País:");
    let tipo = prompt("Tipo (individual/doble/familiar):");
    let fumador = prompt("Fumador (sí/no):");
    let personas = parseInt(prompt("Número de personas:"));
    let mascota = prompt("Mascota (sí/no):");

    alert(reservar(nombre, pais, tipo, fumador, personas, mascota));
    continuar = confirm("¿Registrar otra reserva?");
  }

  salida.textContent = `Total reservas: ${contarReservas()}\n\n${verReservas()}`;
}
