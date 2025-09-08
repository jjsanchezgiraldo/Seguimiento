let estadoSemaforo = prompt("¿El semáforo está encendido o apagado?");
let colorSemaforo = prompt("Ingrese el color del semáforo: verde, amarillo, rojo");

switch (estadoSemaforo) {
    case "encendido":
        switch (colorSemaforo) {
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
