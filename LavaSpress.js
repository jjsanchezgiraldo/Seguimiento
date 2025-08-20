let horasLavadoraPequeña = parseInt(prompt("ingrese el número de horas de Lavadora pequeña"))
let horasLavadoraGrande = parseInt(prompt ("Ingrese el número de horas de Lavadora Grande"))
let totaldehoras = horasLavadoraPequeña + horasLavadoraGrande;
let valorLavadoraPequeña = 3.000;
let valorLavadoraGrande = 4.000;
let totalresultado = 0;
if (totaldehoras >10) {
    totalresultado = ((horasLavadoraPequeña * valorLavadoraPequeña) + (horasLavadoraGrande * ValorLvadoraGrande))*97/100
}else{
    totalResultado = (ValorLavadoraPequeña * horasLavadoraPequeña) + (horasLavadoraGrande * valorLavdoraGrande)
}
console.log(totalResultado);
