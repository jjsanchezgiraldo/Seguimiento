let atenciones = [];

function registrar(cedula, tipo, subtipo = "") {
  const atencion = {
    cedula: cedula,
    tipo: tipo,
    subtipo: subtipo
  };
  atenciones.push(atencion);
}

function transferir() {
  atenciones = atenciones.map(a =>
    a.tipo === "asesoria" ? { ...a, tipo: "llamada" } : a
  );
}

function estadisticas() {
  let llamadas = 0, est = 0, dir = 0;
  atenciones.forEach(a => {
    if (a.tipo === "llamada") llamadas++;
    if (a.tipo === "asesoria" && a.subtipo === "estudiante") est++;
    if (a.tipo === "asesoria" && a.subtipo === "directivo") dir++;
  });
  return `Total: ${atenciones.length}\nLlamadas: ${llamadas}\nEstudiantes: ${est}\nDirectivos: ${dir}`;
}

function simulacionUniversidad() {
  const salida = document.getElementById("salida");
  let cedula = prompt("Cédula:");
  let tipo = prompt("Tipo (llamada/asesoria):");
  let subtipo = tipo === "asesoria" ? prompt("Subtipo (estudiante/directivo):") : "";

  registrar(cedula, tipo, subtipo);

  if (confirm("¿Transferir asesoría a llamada?")) transferir();

  salida.textContent = estadisticas();
}

