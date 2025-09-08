function selectorBoletas() {
  let tipoBoleta = parseInt(prompt(
    "Selecciona tipo de boleta:\n1. General ($20)\n2. VIP ($50)\n3. Platinum ($100)\n4. Niño ($10)"
  ));

  switch(tipoBoleta) {
    case 1:
      alert("Has seleccionado: Boleta General \nPrecio: $22\nBeneficios: Entrada a zona general.");
      break;
    case 2:
      alert("Has seleccionado: Boleta VIP \nPrecio: $45\nBeneficios: Acceso a zona preferencial + bebidas ilimitadas");
      break;
    case 3:
      alert("Has seleccionado: Boleta Platinum \nPrecio: $100\nBeneficios: Acceso a zona exclusiva + meet & greet con el piloto.");
      break;
    case 4:
      alert("Has seleccionado: Boleta Niño \nPrecio: $8\nBeneficios: Entrada a zona general (solo para menores de 11 años).");
      break;
    default:
      alert("Opción no válida, por favor selecciona entre 1 y 4.");
  }
}
selectorBoletas();