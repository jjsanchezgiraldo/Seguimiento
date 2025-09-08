function calcularAhorro() {
    let totalAhorrado = 0;
    let semana = 1;

    while (semana <= 4) { 
        let aporte = parseFloat(prompt("¿Cuánto vas a ahorrar en la semana " + semana + "?")); 
        totalAhorrado += aporte;
        semana++;
    }

    console.log("El total ahorrado después de 4 semanas es: $" + totalAhorrado);
    return totalAhorrado;
}
calcularAhorro();

