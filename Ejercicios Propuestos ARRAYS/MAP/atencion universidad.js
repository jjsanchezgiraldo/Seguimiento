let atenciones = []; // [cedula, tipo, subtipo]

function registrar(cedula, tipo, subtipo = "") {
  atenciones = [...atenciones, [cedula, tipo, subtipo]];
}

function transferir() {
  atenciones = atenciones.map(a => 
    a[1] === "asesoria" ? [a[0], "llamada", a[2]] : a
  );
}

function estadisticas() {
  let llamadas = 0, est = 0, dir = 0;

  atenciones.map(a => {
    if (a[1] === "llamada") llamadas++;
    if (a[1] === "asesoria" && a[2] === "estudiante") est++;
    if (a[1] === "asesoria" && a[2] === "directivo") dir++;
  });

  return `Estadísticas:
- Total de atenciones: ${atenciones.length}
- Llamadas: ${llamadas}
- Asesorías Estudiantes: ${est}
- Asesorías Directivos: ${dir}`;
}

function simulacionUniversidad() {
  const salida = document.getElementById("salida");
  let continuar = true;

  while (continuar) {
    let cedula = prompt("Cédula:");
    let tipo = prompt("Tipo (llamada/asesoria):");
    let subtipo = "";
    if (tipo === "asesoria") {
      subtipo = prompt("Subtipo (estudiante/directivo):");
    }

    registrar(cedula, tipo, subtipo);

    if (tipo === "asesoria" && confirm("¿Transferir asesoría a llamada?")) {
      transferir();
    }

    continuar = confirm("¿Registrar otra atención?");
  }

  salida.textContent = estadisticas();
}
