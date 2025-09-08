function login() {
    const PASS_CORRECTA = "1092";  
    let intentos = 0;  
    let accesoPermitido = false;  

    do {
        let pass = prompt("Ingrese su contraseña:");

        switch(pass) {
            case PASS_CORRECTA:
                accesoPermitido = true;
                console.log("Acceso permitido");
                break;
            default:
                intentos++;
                console.log("Contraseña incorrecta. Intento " + intentos + " de 3");
        }
    } while (intentos < 3 && !accesoPermitido);

    switch(accesoPermitido) {
        case false:
            console.log("Acceso bloqueado. Has superado el número máximo de intentos.");
            break;
    }
}
login();
