let tamañoLavadora = "Lavadora Pequeña";
let tiempo = 12;
switch (tamañoLavadora) {
    case "Lavadora Pequeña":
        switch (tiempo) {
            case 1: (tiempo === 1);
                console.log("una hora por la lavadora pequeña vale 3.000");
                break;

                case 10: (tiempo <=10);
                    console.log("10 horas por la lavadora son 30.000 y tiene un descuento del 3%")
                    break;
                case 10 (tiempo >10):
                    let totalPequeña = (tiempo * 3000) * 0.97;
                    console.log(tiempo + "horas por lavadora pequeña con descuento valen" + totalPequeña);
        }
        break;

    case "Lavadora Grande":
        switch (true) {
            case (tiempo === 1):
                console.log("Una hora por la lavadora grande vale 4.000");
                break;

            case (tiempo <= 10):
                console.log(tiempo + " horas por la lavadora grande valen " + (tiempo * 4000));
                break;

            case (tiempo > 10):
                let totalGrande = (tiempo * 4000) * 0.97; // aplica descuento
                console.log(tiempo + " horas por la lavadora grande con descuento valen " + totalGrande);
                break;
        }
        break;

    default:
        console.log("No seleccionaste un tamaño de lavadora válido");
        break;
}