let cedula = parseInt(prompt("Ingrese su cédula"));
let compra = parseInt(prompt("Ingrese el monto de su compra"));
let saldoPuntos = 100;
let puntosOtorgados = 0;
let descuento = 0;

switch (true) {
    case (compra < 100000):
        puntosOtorgados = 100;
        break;
    case (compra < 500000):
        puntosOtorgados = 250;
        break;
    default:
        puntosOtorgados = 400;
        break;
}

saldoPuntos += puntosOtorgados;
console.log("Saldo total de puntos: " + saldoPuntos);

if (saldoPuntos >= 500) {
    descuento = compra * 0.20;
    console.log("Felicidades, tiene un descuento de: " + descuento);
} else {
    console.log("Faltan " + (500 - saldoPuntos) + " puntos para descuento");
}
