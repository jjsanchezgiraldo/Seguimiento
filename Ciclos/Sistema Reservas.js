function sistemaReservas() {
    let mesasReservadas = 0;
    let totalMesas = 5;

    for (let mesa = 1; mesa <= totalMesas; mesa++) {
        let reservada = prompt("¿Está reservada la mesa " + mesa + "? (si/no)");

        if (reservada === "si" || reservada === "Si" || reservada === "SI") {
            mesasReservadas++;
        }
    }

    let mesasDisponibles = totalMesas - mesasReservadas;

    alert("Mesas reservadas: " + mesasReservadas + "\nMesas disponibles: " + mesasDisponibles);
}
sistemaReservas();