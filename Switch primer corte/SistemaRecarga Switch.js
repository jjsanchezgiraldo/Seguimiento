let operador = prompt("Elija su operador: Claro, Tigo, Movistar");
let tipoOperacion = prompt("Elija operación: recarga o paquete");

switch (tipoOperacion.toLowerCase()) {
    case "recarga":
        let monto = parseInt(prompt("Ingrese el monto de la recarga (mayor a 10.000)"));
        switch (true) {  // Switch para validar rango
            case (monto > 10000):
                console.log("Recarga completada: " + monto);
                break;
            default:
                console.log("Monto inválido. Debe ser mayor a 10.000");
        }
        break;

    case "paquete":
        switch (operador.toLowerCase()) {
            case "movistar":
                console.log("Paquetes suspendidos para Movistar");
                break;

            case "claro":
                let paqueteClaro = prompt("Ingrese paquete CV o CA");
                switch (paqueteClaro) {
                    case "CV": console.log("Compra exitosa, 12.000"); break;
                    case "CA": console.log("Compra exitosa, 20.000"); break;
                    default: console.log("Código inválido"); break;
                }
                break;

            case "tigo":
                let paqueteTigo = prompt("Ingrese paquete TA o TB");
                switch (paqueteTigo) {
                    case "TA": console.log("Compra exitosa, 22.000"); break;
                    case "TB": console.log("Compra exitosa, 30.000"); break;
                    default: console.log("Código inválido"); break;
                }
                break;

            default:
                console.log("Operador no válido");
        }
        break;

    default:
        console.log("Tipo de operación no reconocido");
}

