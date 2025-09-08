function zona(codigo) {
    switch(codigo) {
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
            console.log("Código inválido. Por favor verifique nuevamente.");
    }
}
let codigoAlfa = prompt("Ingrese su código (O, T, S, N):");
zona(codigoAlfa);
