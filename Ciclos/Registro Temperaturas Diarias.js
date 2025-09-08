function registroTemperaturas() {
  let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  let temperaturas = [];
  let total = 0;

  for (let i = 0; i < dias.length; i++) {
    let temperatura = parseFloat(prompt("Ingresa la temperatura máxima del día " + dias[i] + ":"));
    temperaturas.push(temperatura);
    total += temperatura;
  }
  let promedio = total / dias.length;

  let MaximaTemperatura = Math.max(...temperaturas);
  let MinimaTemperatura = Math.min(...temperaturas);
  let diaCaluroso = dias[temperaturas.indexOf(MaximaTemperatura)];
  let diaFrio = dias[temperaturas.indexOf(MinimaTemperatura)];
  
  alert(
    "Promedio de temperatura semanal: " + promedio.toFixed(2) + "°C\n" +
    "Día más caluroso: " + diaCaluroso + " (" + MaximaTemperatura+ "°C)\n" +
    "Día más frío: " + diaFrio + " (" + MinimaTemperatura + "°C)"
  );
}
registroTemperaturas();