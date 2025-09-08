function sistemaDescuentos() {
  let dia = parseInt(prompt(
    "Ingresa el día:\n1. Lunes\n2. Martes\n3. Miércoles\n4. Jueves\n5. Viernes\n6. Sábado\n7. Domingo"
  ));

  switch(dia) {
    case 1:
      alert("Lunes - Descuento del 10% en toda la tienda");
      break;
    case 2:
      alert("Martes - No hay descuento hoy.");
      break;
    case 3:
      alert("Miércoles - Descuento del 15% en toda la tienda");
      break;
    case 4:
      alert("Jueves - No hay descuento hoy.");
      break;
    case 5:
      alert("Viernes - Descuento del 20% en toda la tienda");
      break;
    case 6:
      alert("Sábado - No hay descuento hoy.");
      break;
    case 7:
      alert("Domingo - No hay descuento hoy.");
      break;
    default:
      alert("Número inválido, ingresa un valor del 1 al 7.");
  }
}
sistemaDescuentos();