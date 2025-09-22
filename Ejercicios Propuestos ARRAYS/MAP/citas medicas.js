let agenda = {
  citas: []
};

function programarCita() {
  const paciente = prompt("Nombre del paciente:");
  const fecha = prompt("Fecha (YYYY-MM-DD):");
  const hora = prompt("Hora (HH:MM):");
  const medico = prompt("Médico:");

  const cita = { paciente, fecha, hora, medico };
  agenda.citas.push(cita);

  const salida = document.getElementById("salida");
  salida.textContent = `Cita registrada para ${paciente} con el Dr(a). ${medico} el ${fecha} a las ${hora}.\nTotal citas: ${agenda.citas.length}`;
}

function verCitas() {
  const salida = document.getElementById("salida");
  if (agenda.citas.length === 0) {
    salida.textContent = "No hay citas programadas.";
    return;
  }

  const resumen = agenda.citas
    .map((c, i) => `${i + 1}. ${c.paciente} - ${c.fecha} ${c.hora} con ${c.medico}`)
    .join("\n");

  salida.textContent = `Citas programadas:\n${resumen}`;
}

function cancelarCita() {
  const paciente = prompt("Nombre del paciente a cancelar:");
  const antes = agenda.citas.length;
  agenda.citas = agenda.citas.filter(c => c.paciente !== paciente);
  const salida = document.getElementById("salida");

  if (agenda.citas.length < antes) {
    salida.textContent = `Cita de ${paciente} cancelada.\nTotal citas restantes: ${agenda.citas.length}`;
  } else {
    salida.textContent = `No se encontró ninguna cita para ${paciente}.`;
  }
}

