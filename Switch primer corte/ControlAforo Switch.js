let codigoalfa = prompt("Ingrese su código (O, T, S, N)");

switch (codigoalfa) {
    case "O":
        console.log("Bienvenido, diríjase a la zona Oriental");
        break;
    case "T":
        console.log("Bienvenido, diríjase a la zona Occidental");
        break;
    case "S":
        console.log("Bienvenido, diríjase a la zona Sur");
        break;
    case "N":
        console.log("Bienvenido, diríjase a la zona Norte");
        break;
    default:
        console.log("Código inválido. Verifique nuevamente.");
        break;
}

