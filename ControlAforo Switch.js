let codigoalfa = prompt("Por favor ingrese su código (O, T, S, N)");

switch (codigoalfa) {
    case "O":
        console.log("Bienvenido, Diríjase a la zona Oriental");
        break;
    case "T":
        console.log("Bienvenido, por favor Diríjase a la zona Occidental");
        break;
    case "S":
        console.log("Bienvenido, por favor Diríjase a la zona Sur");
        break;
    case "N":
        console.log("Bienvenido, por favor Diríjase a la zona Norte");
        break;
    default:
        console.log("Código inválido. Por favor verifique nuevamente.");
        break;
}