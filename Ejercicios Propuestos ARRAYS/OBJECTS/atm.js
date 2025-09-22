let cuentas = [
  { cedula: "123", pin: "1111", saldo: 500000 },
  { cedula: "456", pin: "2222", saldo: 300000 }
];

let usuarioActual = null;

function login() {
  if (usuarioActual) return true;
  const cedula = prompt("Ingrese su cédula:");
  const pin = prompt("Ingrese su PIN:");
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].cedula === cedula && cuentas[i].pin === pin) {
      usuarioActual = cuentas[i];
      alert(`Bienvenido ${cedula}`);
      return true;
    }
  }
  alert("Cédula o PIN incorrecto.");
  return false;
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
  const destinoCedula = prompt("Cédula de destino:");
  const monto = parseInt(prompt("Monto a transferir:"));
  const salida = document.getElementById("salida");

  let destino = null;
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].cedula === destinoCedula) {
      destino = cuentas[i];
      break;
    }
  }

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

  salida.textContent = `Transferencia de $${monto} realizada a ${destinoCedula}.\nSaldo actual: $${usuarioActual.saldo}`;
}

function consultarSaldo() {
  if (!login()) return;
  document.getElementById("salida").textContent = `Saldo actual: $${usuarioActual.saldo}`;
}

function verCuentas() {
  const salida = document.getElementById("salida");
  let resumen = "Resumen de cuentas:\n";
  for (let i = 0; i < cuentas.length; i++) {
    resumen += "Cédula: " + cuentas[i].cedula + " | Saldo: $" + cuentas[i].saldo + "\n";
  }
  salida.textContent = resumen;
}


