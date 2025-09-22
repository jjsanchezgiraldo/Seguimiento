let productos = [
  ["manzana", 1000, 10], // [nombre, precio, stock]
  ["pan", 2000, 5],
  ["leche", 3000, 8]
];
let carrito = []; // [nombre, cantidad]

function agregarProducto(nombre, cantidad) {
  let prod = productos.find(p => p[0] === nombre && p[2] >= cantidad);
  if (!prod) return "Producto no disponible o stock insuficiente";
  carrito = [...carrito, [nombre, cantidad]];
  productos = productos.map(p => p[0] === nombre ? [p[0], p[1], p[2] - cantidad] : p);
  return "Producto agregado";
}

function mostrarCarrito() {
  let total = 0;
  let detalle = carrito.map(c => {
    let prod = productos.find(p => p[0] === c[0]);
    let precio = prod ? prod[1] * c[1] : 0;
    total += precio;
    return `${c[0]} x${c[1]} = ${precio}`;
  }).join("\n");
  return detalle + `\nTotal: ${total}`;
}

function simulacionCarrito() {
  const salida = document.getElementById("salida");
  let nombre = prompt("Producto (manzana/pan/leche):");
  let cantidad = parseInt(prompt("Cantidad:"));
  alert(agregarProducto(nombre, cantidad));
  salida.textContent = mostrarCarrito();
}
