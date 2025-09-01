let opcionesRevistas = prompt("Elija la revista: Dinero, National Geographic o American Journal");
let operadorMóvil = prompt("Elija su operador móvil: Claro, Movistar, WOM, Tigo");
let opcionesMesesRevistas = parseInt(prompt("Elija el tiempo en meses (3, 6, 12)"));
let valorFinal = 0;
//Dinero
switch (opcionesRevistas) {
    case "Dinero":
        switch (operadorMóvil) {
            case "Claro":
                switch (opcionesMesesRevistas) {
                    case 3:
                        valorFinal == 6 * 95/100;
                        break;
                    case 6:
                        valorFinal == 11 * 95/100;
                        break;
                    case 12:
                        valorFinal == 20 * 95/100;
                        break;
                }
                break;
            case "Movistar":
            case "WOM":
            case "Tigo":
                switch (opcionesMesesRevistas) {
                    case 3:
                        valorFinal = 6;
                        break;
                    case 6:
                        valorFinal = 11;
                        break;
                    case 12:
                        valorFinal = 20;
                        break;
                }
                break;
        }
        break;
//National Geographic
    case "National Geographic":
        switch (operadorMóvil) {
            case "Claro":
                switch (opcionesMesesRevistas) {
                    case 3:
                        valorFinal = 10 * 95/100;
                        break;
                    case 6:
                        valorFinal = 13 * 95/100;
                        break;
                    case 12:
                        valorFinal = 22 * 95/100;
                        break;
                }
                break;
            case "Movistar":
            case "WOM":
            case "Tigo":
                switch (opcionesMesesRevistas) {
                    case 3:
                        valorFinal = 10;
                        break;
                    case 6:
                        valorFinal = 13;
                        break;
                    case 12:
                        valorFinal = 22;
                        break;
                }
                break;
        }
        break;
//American Journal
    case "American Journal":
        switch (operadorMóvil) {
            case "Claro":
                switch (opcionesMesesRevistas) {
                    case 3:
                        valorFinal = 12 * 95/100;
                        break;
                    case 6:
                        valorFinal = 18 * 95/100;
                        break;
                    case 12:
                        valorFinal = 30 * 95/100;
                        break;
                }
                break;
            case "Movistar":
            case "WOM":
            case "Tigo":
                switch (opcionesMesesRevistas) {
                    case 3:
                        valorFinal = 12;
                        break;
                    case 6:
                        valorFinal = 18;
                        break;
                    case 12:
                        valorFinal = 30;
                        break;
                }
                break;
        }
        break;

    default:
        console.log("Opción de revista inválida");
        break;
}

console.log("Debes pagar:" + valorFinal + "USD");