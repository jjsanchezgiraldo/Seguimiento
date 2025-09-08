let horasLavadoraPequeña = parseInt(prompt("Ingrese el número de horas de Lavadora pequeña"));
let horasLavadoraGrande = parseInt(prompt("Ingrese el número de horas de Lavadora Grande"));

let totalResultado = 0;
let valorLavadoraPequeña = 3000;
let valorLavadoraGrande = 4000;
let totalHoras = horasLavadoraPequeña + horasLavadoraGrande;

let tamañoLavadora = prompt("Elija la lavadora: Pequeña o Grande");

switch (tamañoLavadora) {
    case "Pequeña":
        switch (true) {
            case (totalHoras <= 10):
                totalResultado = horasLavadoraPequeña * valorLavadoraPequeña;
                break;
            case (totalHoras > 10):
                totalResultado = horasLavadoraPequeña * valorLavadoraPequeña * 0.97;
                break;
        }
        break;
    case "Grande":
        switch (true) {
            case (totalHoras <= 10):
                totalResultado = horasLavadoraGrande * valorLavadoraGrande;
                break;
            case (totalHoras > 10):
                totalResultado = horasLavadoraGrande * valorLavadoraGrande * 0.97;
                break;
        }
        break;
    default:
        console.log("Lavadora no válida");
}

console.log("Total a pagar: " + totalResultado);
