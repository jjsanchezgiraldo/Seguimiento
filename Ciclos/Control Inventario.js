function controlInventario() {
    let producto = "";
    let totalVendido = 0;
    let listaProductos = [];

    while (producto.toLowerCase() !== "terminar") {
        producto = prompt("Ingresa producto vendido (escribe 'terminar' para finalizar):");

        if (producto.toLowerCase() !== "terminar") {
            totalVendido++;
            listaProductos.push(producto);
        }
    }

    alert("Resumen del día:\n" +
          "Total de productos vendidos: " + totalVendido + "\n" +
          "Productos vendidos: " + listaProductos.join(", "));
}
controlInventario();