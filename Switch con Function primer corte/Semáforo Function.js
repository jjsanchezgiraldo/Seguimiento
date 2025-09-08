function semaforo(estado, color) {
    switch (estado) {
        case "encendido":
            switch (color) {
                case "verde":
                    console.log("Puede avanzar");
                    break;
                case "amarillo":
                    console.log("Precaución");
                    break;
                case "rojo":
                    console.log("Deténgase");
                    break;
                default:
                    console.log("Fallo en el dispositivo");
            }
            break;
        case "apagado":
            console.log("Semáforo apagado");
            break;
        default:
            console.log("Estado no válido");
    }
}
semaforo("encendido", "verde");
