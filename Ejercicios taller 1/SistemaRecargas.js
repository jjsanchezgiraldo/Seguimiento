let operador = prompt("De los siguientes operadores móviles, elija el suyo: Claro, Tigo, Movistar");
let tipooperacion = prompt("Elija si desea hacer una recarga o comprar un paquete");
if (tipooperacion =="recarga"){
    let monto = parseInt("Ingrese el monto de la recarga, (debe ser mayor a 10.000)");
    if (monto > 10000) {
        console.log("recarga completada");
        console.log("El tipo de operación es recarga");
        console.log("El monto es:");
    }else{
        console.log("montoinválido.Debe ser mayor a 10.000");
        }
    }else if (tipooperacion == "paquete") {
        if(operador == "movistar") {
            console.log("Los paquetes están suspendidos para movistar. Intente nuevamente con recarga");
            
        }else {
            let paquete = prompt("Ingrese el código del paquete que deseas (Claro: CV/CA | Tigo: TA/TB");
            let precio = 0;

            if (operador == "Claro") {
                if(paquete == "CV") precio =12000;
                else if (paquete == "CA") precio =20000;

            }else if (operador == "Tigo") {
                if (paquete == "TA") precio = 22000;
                else if (paquete == "TB") precio = 30000;
            }

            if (precio > 0){
                console.log ("El operadores: operador");
                console.log("La operacion escogida es: paquete");
                console.log("El paquete es:");
                console.log("El monto es:");
                console.log("Su compra ha sido exitosa");
            } else {
                console.log("El codigo del paquete es invalido");
            }
        }

    } else {
        console.log("ERROR: este tipo de operacion no se puede reconocer")
    }
