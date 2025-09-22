let cuentas = [
  { cedula: "123", pin: "1111", saldo: 500000 },
  { cedula: "456", pin: "2222", saldo: 300000 },
  { cedula: "789", pin: "3333", saldo: 1000000 }
];

let usuarioActual = null;

function login() {
  if (usuarioActual) return true; // ya logueado
  const cedula = prompt("Ingrese su cédula:");
  const pin = prompt("Ingrese su PIN:");
  const cuenta = cuentas.find(c => c.cedula === cedula && c.pin === pin);
  if (cuenta) {
    usuarioActual = cuenta;
    alert(`Bienvenido ${cedula}`);
    return true;
  } else {
    alert("Cédula o PIN incorrecto.");
    return false;
  }
}

function retirarDinero() {
  if (!login()) return;
  const monto = parseInt(prompt("Monto a retirar (múltiplos de 50,000):"));
  const salida = document.getElementById("salida");

  if (monto % 50000 !== 0) {
    salida.textContent = "El monto debe ser múltiplo de 50,000.";
    return;
  }

  if (usuarioActual.saldo >= monto) {
    usuarioActual.saldo -= monto;
    salida.textContent = `Retiro exitoso de $${monto}.\nSaldo actual: $${usuarioActual.saldo}`;
  } else {
    salida.textContent = "Fondos insuficientes.";
  }
}

function depositarDinero() {
  if (!login()) return;
  const monto = parseInt(prompt("Monto a depositar:"));
  usuarioActual.saldo += monto;
  document.getElementById("salida").textContent =
    `Depósito exitoso de $${monto}.\nSaldo actual: $${usuarioActual.saldo}`;
}

function transferirDinero() {
  if (!login()) return;
  const cedulaDestino = prompt("Cédula de destino:");
  const monto = parseInt(prompt("Monto a transferir:"));
  const salida = document.getElementById("salida");

  const destino = cuentas.find(c => c.cedula === cedulaDestino);
  if (!destino) {
    salida.textContent = "Cuenta de destino no encontrada.";
    return;
  }
  if (usuarioActual.saldo < monto) {
    salida.textContent = "Fondos insuficientes.";
    return;
  }

  usuarioActual.saldo -= monto;
  destino.saldo += monto;

  salida.textContent = `Transferencia de $${monto} realizada a ${cedulaDestino}.\nSaldo actual: $${usuarioActual.saldo}`;
}

function consultarSaldo() {
  if (!login()) return;
  document.getElementById("salida").textContent = `Saldo actual: $${usuarioActual.saldo}`;
}

function verTodasCuentas() {
  const salida = document.getElementById("salida");
  const resumen = cuentas
    .map(c => `Cédula: ${c.cedula} | Saldo: $${c.saldo}`)
    .join("\n");
  salida.textContent = `Cuentas:\n${resumen}`;
}
