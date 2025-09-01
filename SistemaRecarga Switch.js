let operador = prompt("De los siguientes operadores móviles, elija el suyo: Claro, Tigo, Movistar");
let tipooperacion = prompt("Elija si desea hacer una recarga o comprar un paquete");

switch (tipooperacion.toLowerCase()) {
    case "recarga":
        let monto = parseInt(prompt("Ingrese el monto de la recarga (debe ser mayor a 10.000)"));
        if (monto > 10000) {
            console.log("Recarga completada");
            console.log("El tipo de operación es: recarga");
            console.log("El monto es: " + monto);
        } else {
            console.log("Monto inválido. Debe ser mayor a 10.000");
        }
        break;

    case "paquete":
        switch (operador.toLowerCase()) {
            case "movistar":
                console.log("Los paquetes están suspendidos para Movistar. Intente nuevamente con recarga");
                break;

            case "claro":
                let paqueteClaro = prompt("Ingrese el código del paquete (CV = 12.000 | CA = 20.000)");
                switch (paqueteClaro) {
                    case "CV":
                        console.log("Operador: Claro");
                        console.log("Operación: Paquete");
                        console.log("Paquete: CV");
                        console.log("Monto: 12.000");
                        console.log(" Compra exitosa");
                        break;
                    case "CA":
                        console.log("Operador: Claro");
                        console.log("Operación: Paquete");
                        console.log("Paquete: CA");
                        console.log("Monto: 20.000");
                        console.log("Compra exitosa");
                        break;
                    default:
                        console.log("Código de paquete inválido en Claro");
                }
                break;

            case "tigo":
                let paqueteTigo = prompt("Ingrese el código del paquete (TA = 22.000 | TB = 30.000)");
                switch (paqueteTigo) {
                    case "TA":
                        console.log("Operador: Tigo");
                        console.log("Operación: Paquete");
                        console.log("Paquete: TA");
                        console.log("Monto: 22.000");
                        console.log("Compra exitosa");
                        break;
                    case "TB":
                        console.log("Operador: Tigo");
                        console.log("Operación: Paquete");
                        console.log("Paquete: TB");
                        console.log("Monto: 30.000");
                        console.log("Compra exitosa");
                        break;
                    default:
                        console.log("Código de paquete inválido en Tigo");
                }
                break;

            default:
                console.log("Operador no reconocido. Solo Claro, Tigo o Movistar");
        }
        break;

    default:
        console.log(" ERROR: este tipo de operación no se puede reconocer");
}