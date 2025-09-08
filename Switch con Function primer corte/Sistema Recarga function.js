function operacion(operador, tipoOperacion) {
    switch(tipoOperacion.toLowerCase()) {
        case "recarga":
            let monto = parseInt(prompt("Ingrese monto mayor a 10000"));
            switch(true) {
                case (monto > 10000):
                    console.log("Recarga completada:", monto);
                    break;
                default:
                    console.log("Monto inválido");
            }
            break;

        case "paquete":
            switch(operador.toLowerCase()) {
                case "movistar":
                    console.log("Paquetes suspendidos para Movistar");
                    break;
                case "claro":
                    let paquete = prompt("Ingrese paquete CV o CA");
                    switch(paquete) {
                        case "CV": console.log("Compra exitosa, 12.000"); break;
                        case "CA": console.log("Compra exitosa, 20.000"); break;
                        default: console.log("Código inválido"); break;
                    }
                    break;
                case "tigo":
                    let paqueteTigo = prompt("Ingrese paquete TA o TB");
                    switch(paqueteTigo) {
                        case "TA": console.log("Compra exitosa, 22.000"); break;
                        case "TB": console.log("Compra exitosa, 30.000"); break;
                        default: console.log("Código inválido"); break;
                    }
                    break;
                default:
                    console.log("Operador inválido");
            }
            break;

        default:
            console.log("Tipo de operación no reconocido");
    }
}
operacion("Claro", "paquete");
