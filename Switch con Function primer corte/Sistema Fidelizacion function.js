function puntos(compra, saldopuntos) {
    let puntosOtorgados = 0;
    switch(true) {
        case (compra < 100000):
            puntosOtorgados = 100;
            break;
        case (compra < 500000):
            puntosOtorgados = 250;
            break;
        default:
            puntosOtorgados = 400;
    }
    saldopuntos += puntosOtorgados;
    console.log("Saldo de puntos:", saldopuntos);

    switch(true) {
        case (saldopuntos >= 500):
            console.log("Descuento del 20%:", compra*0.2);
            break;
        default:
            console.log("Sigue acumulando puntos:", 500-saldopuntos, "faltantes");
    }
}
puntos(200000, 100);
