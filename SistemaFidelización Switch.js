let cedula = parseInt(prompt("Ingrese su cédula"));
let compra = parseInt(prompt("Por favor ingrese el monto de su compra"));
let saldopuntos = 100;
let puntosotorgados = 0;
let descuento = 0;

switch (true) {
    case (compra < 100000):
        puntosotorgados = 100;
        console.log("Usted ha recibido 100 puntos por su compra");
        break;

    case (compra < 500000):
        puntosotorgados = 250;
        console.log("Usted ha recibido 250 puntos por su compra");
        break;

    default:
        puntosotorgados = 400;
        console.log("Usted ha recibido 400 puntos por su compra");
        break;
}

saldopuntos += puntosotorgados;
console.log("Saldo total de puntos: " + saldopuntos);

if (saldopuntos >= 500) {
    descuento = compra * 0.20;
    console.log("felicidades, tiene un descento de: " + descuento + " en su compra");
} else {
    let puntosPendientes = 500 - saldopuntos;
    console.log("sigue acumulando. Le faltan " + puntosPendientes + " puntos para llegar a 500");
}