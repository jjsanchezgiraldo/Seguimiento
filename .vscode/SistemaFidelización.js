let cedula = parseInt(prompt("Ingrese su cédula y el monto de su compra"))
let compra = parseInt (prompt("Porfavor ingrese el monto de su compra"));
let saldopuntos = 100;
let puntosotorgados = 0;
let descuento = 0;
if (compra < 100000) {
    puntosotorgados = 100;
    console.log("usted ha recibido 100 puntos por su compra")
}else if (compra < 500000) {
    puntosotorgados = 250;
    console.log("usted ha recibido 250 puntos por su compra")
}else  (compra > 500000); {
    puntosotorgados = 400
    console.log("Usted ha recibido 400 puntos por su compra")
}
 totalresultado = (saldopuntos += puntosotorgados);
 console.log (totalresultado);{

 }if (saldopuntos > 500){
    descuento = compra * 0.20;
    console.log("Felicidades, tiene un descuento pendiente")

 }else {
    let puntospendientes =500 - saldopuntos;
    console.log("sigue acumulando. faltan pocos puntos para llegar a 500")
 }
 
