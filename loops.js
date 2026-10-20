let productos = ["Guantes RDX", "Guantes MMA", "Guantes de entrenamiento"];

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}

for (let producto of productos) {
    console.log("Producto:", producto);
}


// 08-functions.js
function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

console.log("Subtotal:", calcularSubtotal(39.99, 2));