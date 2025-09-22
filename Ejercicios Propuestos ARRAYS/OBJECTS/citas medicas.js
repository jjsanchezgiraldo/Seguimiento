let agenda = {
  citas: [],

  programar: function(paciente, fecha, hora, medico) {
    this.citas.push({ paciente, fecha, hora, medico });
    return "Cita registrada";
  },

  ver: function() {
    if (this.citas.length === 0) return "No hay citas registradas.";
    let resumen = "";
    for (let i = 0; i < this.citas.length; i++) {
      let c = this.citas[i];
      resumen += `${c.paciente} - ${c.fecha} ${c.hora} con ${c.medico}\n`;
    }
    return resumen;
  },

  cancelar: function(paciente) {
    for (let i = 0; i < this.citas.length; i++) {
      if (this.citas[i].paciente === paciente) {
        this.citas.splice(i, 1);
        return "Cita cancelada";
      }
    }
    return "Paciente no encontrado";
  }
};

document.getElementById("iniciar").addEventListener("click", function() {
  const salida = document.getElementById("salida");
  let opcion;
  do {
    opcion = prompt(
      "Seleccione una opción:\n1. Programar cita\n2. Ver citas\n3. Cancelar cita\n4. Salir"
    );

    if (opcion === "1") {
      let paciente = prompt("Nombre:");
      let fecha = prompt("Fecha:");
      let hora = prompt("Hora:");
      let medico = prompt("Médico:");
      alert(agenda.programar(paciente, fecha, hora, medico));
      salida.textContent = agenda.ver();
    }

    else if (opcion === "2") {
      salida.textContent = agenda.ver();
    }

    else if (opcion === "3") {
      let paciente = prompt("Paciente a cancelar:");
      alert(agenda.cancelar(paciente));
      salida.textContent = agenda.ver();
    }

    else if (opcion === "4") {
      alert("Simulación finalizada.");
    }

    else {
      alert("Opción inválida");
    }

  } while (opcion !== "4");
});


