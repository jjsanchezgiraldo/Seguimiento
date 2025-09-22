let banco = {
  cola: [],
  contador: 0
};

function tomarTurno() {
  banco.contador++;
  banco.cola = [...banco.cola, banco.contador];
  const salida = document.getElementById("salida");
  salida.textContent = `Turno ${banco.contador} asignado. Por favor espere a ser llamado.`;
}

function llamarCliente() {
  const salida = document.getElementById("salida");
  if (banco.cola.length === 0) {
    salida.textContent = "No hay clientes en cola.";
    return;
  }

  let turno = banco.cola[0];
  banco.cola = banco.cola.slice(1);
  salida.textContent = `Cliente con turno ${turno}, acérquese a la ventanilla.`;
}

function mostrarCola() {
  const salida = document.getElementById("salida");
  salida.textContent =
    banco.cola.length > 0
      ? "Cola actual: " + banco.cola.map(t => `Turno ${t}`).join(", ")
      : "Cola vacía.";
}

