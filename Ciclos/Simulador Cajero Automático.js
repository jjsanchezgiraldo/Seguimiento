function cajeroAutomatico() {
    let saldo = 1000;
    let opcion;

    do {
        opcion = parseInt(prompt(
            "Selecciona operación:\n" +
            "1. Consultar saldo\n" +
            "2. Retirar\n" +
            "3. Depositar\n" +
            "4. Salir"
        ));

        switch(opcion) {
            case 1:
                alert("Tu saldo es: $" + saldo);
                break;
            case 2:
                let retiro = parseInt(prompt("Ingresa el monto a retirar:"));
                if(retiro > saldo) {
                    alert("Saldo insuficiente");
                } else {
                    saldo -= retiro;
                    alert("Has retirado: $" + retiro + "\nSaldo actual: $" + saldo);
                }
                break;
            case 3:
                let deposito = parseInt(prompt("Ingresa el monto a depositar:"));
                saldo += deposito;
                alert("Has depositado: $" + deposito + "\nSaldo actual: $" + saldo);
                break;
            case 4:
                alert("Gracias por usar el cajero. Hasta luego");
                break;
            default:
                alert("Opción no válida. Intenta de nuevo");
        }
    } while(opcion !== 4);
}
cajeroAutomatico();
