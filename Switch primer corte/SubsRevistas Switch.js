let opcionesRevistas = prompt("Elija la revista: Dinero, National Geographic, American Journal");
let operadorMovil = prompt("Elija operador: Claro, Movistar, WOM, Tigo");
let opcionesMesesRevistas = parseInt(prompt("Elija meses (3,6,12)"));
let valorFinal = 0;

switch(opcionesRevistas) {
    case "Dinero":
        switch(operadorMovil) {
            case "Claro":
                switch(opcionesMesesRevistas) {
                    case 3: valorFinal = 6 * 0.95; break;
                    case 6: valorFinal = 11 * 0.95; break;
                    case 12: valorFinal = 20 * 0.95; break;
                }
                break;
            case "Movistar":
            case "WOM":
            case "Tigo":
                switch(opcionesMesesRevistas) {
                    case 3: valorFinal = 6; break;
                    case 6: valorFinal = 11; break;
                    case 12: valorFinal = 20; break;
                }
                break;
        }
        break;

    case "National Geographic":
        switch(operadorMovil) {
            case "Claro":
                switch(opcionesMesesRevistas) {
                    case 3: valorFinal = 10 * 0.95; break;
                    case 6: valorFinal = 13 * 0.95; break;
                    case 12: valorFinal = 22 * 0.95; break;
                }
                break;
            case "Movistar":
            case "WOM":
            case "Tigo":
                switch(opcionesMesesRevistas) {
                    case 3: valorFinal = 10; break;
                    case 6: valorFinal = 13; break;
                    case 12: valorFinal = 22; break;
                }
                break;
        }
        break;

    case "American Journal":
        switch(operadorMovil) {
            case "Claro":
                switch(opcionesMesesRevistas) {
                    case 3: valorFinal = 12 * 0.95; break;
                    case 6: valorFinal = 18 * 0.95; break;
                    case 12: valorFinal = 30 * 0.95; break;
                }
                break;
            case "Movistar":
            case "WOM":
            case "Tigo":
                switch(opcionesMesesRevistas) {
                    case 3: valorFinal = 12; break;
                    case 6: valorFinal = 18; break;
                    case 12: valorFinal = 30; break;
                }
                break;
        }
        break;

    default:
        console.log("Revista inválida");
}

console.log("Debes pagar: " + valorFinal + " USD");
