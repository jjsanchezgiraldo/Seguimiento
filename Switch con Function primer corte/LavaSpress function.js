function lavado(tamano, horas) {
    let valor = 0;
    switch(tamano) {
        case "Lavadora Pequeña":
            valor = 3000;
            break;
        case "Lavadora Grande":
            valor = 4000;
            break;
        default:
            console.log("Tamaño inválido");
            return;
    }

    switch(true) {
        case (horas > 10):
            console.log("Costo con 3% de descuento:", (valor*horas)*0.97);
            break;
        default:
            console.log("Costo normal:", valor*horas);
    }
}
lavado("Lavadora Pequeña", 12);
