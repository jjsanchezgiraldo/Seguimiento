function calcularPromedio() {
    let cantidad = parseInt(prompt("¿Cuántas asignaturas tienes?"));
    let suma = 0;

    for (let i = 1; i <= cantidad; i++) {
        let nota = parseFloat(prompt("Ingresa la calificación de la asignatura " + i + ":"));
        suma += nota;
    }

    let promedio = suma / cantidad;
    alert("Tu promedio es: " + promedio);
}
calcularPromedio();
