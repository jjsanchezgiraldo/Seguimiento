let productos = [
  { nombre: "manzana", precio: 1000, stock: 10 },
  { nombre: "pan", precio: 2000, stock: 5 },
  { nombre: "leche", precio: 3000, stock: 8 }
];

let carrito = {
  items: [],

  agregar: function(prod, cantidad) {
    if (prod.stock < cantidad) return "Stock insuficiente";
    this.items.push({ producto: prod, cantidad });
    prod.stock -= cantidad;
    return "Producto agregado";
  },

  mostrar: function() {
    let total = 0;
    let detalle = this.items.map(i => {
      let subtotal = i.producto.precio * i.cantidad;
      total += subtotal;
      return `${i.producto.nombre} x${i.cantidad} = ${subtotal}`;
    }).join("\n");
    return detalle + `\nTotal: ${total}`;
  }
};

function simulacionCarrito() {
  const salida = document.getElementById("salida");
  let nombre = prompt("Producto (manzana/pan/leche):");
  let cantidad = parseInt(prompt("Cantidad:"));
  let prod = productos.find(p => p.nombre === nombre);
  alert(carrito.agregar(prod, cantidad));
  salida.textContent = carrito.mostrar();
}

