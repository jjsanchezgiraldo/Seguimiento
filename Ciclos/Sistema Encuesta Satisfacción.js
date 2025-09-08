function encuestaSatisfaccion() {
  let totalPuntos = 0;
  
  for (let i = 1; i <= 10; i++) {
    let satisfaccion = parseInt(prompt("Cliente " + i + ": Califica nuestro servicio (1-5):"));
    totalPuntos += satisfaccion;
  }
  
  let promedio = totalPuntos / 10;
  alert("El promedio de satisfacción de los 10 clientes es: " + promedio);
}
encuestaSatisfaccion();
