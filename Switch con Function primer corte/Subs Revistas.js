function suscripcion(revista, operador, meses) {
    let valorFinal = 0;

    switch(revista) {
        case "Dinero":
            switch(operador) {
                case "Claro":
                    switch(meses) {
                        case 3: valorFinal = 6 * 0.95; break;
                        case 6: valorFinal = 11 * 0.95; break;
                        case 12: valorFinal = 20 * 0.95; break;
                        default: console.log("Meses inválidos"); return;
                    }
                    break;
                case "Movistar":
                case "WOM":
                case "Tigo":
                    switch(meses) {
                        case 3: valorFinal = 6; break;
                        case 6: valorFinal = 11; break;
                        case 12: valorFinal = 20; break;
                        default: console.log("Meses inválidos"); return;
                    }
                    break;
                default:
                    console.log("Operador inválido"); return;
            }
            break;

        case "National Geographic":
            switch(operador) {
                case "Claro":
                    switch(meses) {
                        case 3: valorFinal = 10 * 0.95; break;
                        case 6: valorFinal = 13 * 0.95; break;
                        case 12: valorFinal = 22 * 0.95; break;
                        default: console.log("Meses inválidos"); return;
                    }
                    break;
                case "Movistar":
                case "WOM":
                case "Tigo":
                    switch(meses) {
                        case 3: valorFinal = 10; break;
                        case 6: valorFinal = 13; break;
                        case 12: valorFinal = 22; break;
                        default: console.log("Meses inválidos"); return;
                    }
                    break;
                default:
                    console.log("Operador inválido"); return;
            }
            break;

        case "American Journal":
            switch(operador) {
                case "Claro":
                    switch(meses) {
                        case 3: valorFinal = 12 * 0.95; break;
                        case 6: valorFinal = 18 * 0.95; break;
                        case 12: valorFinal = 30 * 0.95; break;
                        default: console.log("Meses inválidos"); return;
                    }
                    break;
                case "Movistar":
                case "WOM":
                case "Tigo":
                    switch(meses) {
                        case 3: valorFinal = 12; break;
                        case 6: valorFinal = 18; break;
                        case 12: valorFinal = 30; break;
                        default: console.log("Meses inválidos"); return;
                    }
                    break;
                default:
                    console.log("Operador inválido"); return;
            }
            break;

        default:
            console.log("Revista inválida"); return;
    }

    console.log("Debes pagar: " + valorFinal + " USD");
}
suscripcion("Dinero", "Claro", 6);
