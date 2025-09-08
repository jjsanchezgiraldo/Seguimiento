function soporteTecnico() {
  let problema = parseInt(prompt(
    "Selecciona el tipo de problema que presentas:\n1. Facturación\n2. Problemas técnicos\n3. Ventas\n4. Quejas y sugerencias"
  ));

  switch(problema) {
    case 1:
      alert("Has sido dirigido al departamento de Facturación.\nContacto: facturacion@softwar.com\nTel: 300-111-2222");
      break;
    case 2:
      alert("Has sido dirigido al departamento Técnico.\nContacto: soporte@softwar.com\nTel: 300-333-4444");
      break;
    case 3:
      alert("Has sido dirigido al departamento de Ventas.\nContacto: ventas@softwar.com\nTel: 300-555-6666");
      break;
    case 4:
      alert("Has sido dirigido al departamento de Quejas y Sugerencias.\nContacto: quejas@softwar.com\nTel: 300-777-8888");
      break;
    default:
      alert("Opción no válida, intenta de nuevo.");
  }
}
soporteTecnico();