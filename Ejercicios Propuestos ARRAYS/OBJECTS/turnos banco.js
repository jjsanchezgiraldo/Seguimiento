let banco = {
  cola: [],
  contador: 0,

  tomarTurno: function() {
    this.contador++;
    this.cola.push(this.contador);
    return `Turno ${this.contador} asignado.`;
  },

  llamarCliente: function() {
    if (this.cola.length === 0) return "No hay clientes en cola.";
    let turno = this.cola.shift();
    return `Llamando al turno ${turno}.`;
  },

  mostrarCola: function() {
    if (this.cola.length === 0) return "Cola vacía.";
    let texto = "";
    for (let i = 0; i < this.cola.length; i++) {
      texto += `Turno ${this.cola[i]}${i < this.cola.length - 1 ? ", " : ""}`;
    }
    return "Cola actual: " + texto;
  }
};

function tomarTurnoBanco() {
  document.getElementById("salida").textContent = banco.tomarTurno();
}

function llamarClienteBanco() {
  document.getElementById("salida").textContent = banco.llamarCliente();
}

function mostrarColaBanco() {
  document.getElementById("salida").textContent = banco.mostrarCola();
}
