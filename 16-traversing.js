'use strict';
let carritoAmazon = ['Echo Dot', 'Fire TV Stick', 'Kindle Paperwhite'];


console.log(' Recorrido con for:');
for (let i = 0; i < carritoAmazon.length; i++) {
  console.log(carritoAmazon[i]);
}


console.log(' Recorrido con forEach:');
carritoAmazon.forEach(function (producto) {
  console.log(producto);
});


console.log(' Recorrido con map:');
let productosEnMayuscula = carritoAmazon.map(function (producto) {
  return producto.toUpperCase();
});
console.log(productosEnMayuscula);
console.log(' Carrito original sin cambios:', carritoAmazon);


let catalogoAmazon = [
  { nombre: 'Echo Dot', precio: 50.00, categoria: 'Electronica' },
  { nombre: 'Kindle', precio: 139.99, categoria: 'Libros' },
  { nombre: 'Silla Gamer', precio: 199.99, categoria: 'Hogar' }
];


console.log(' Catalogo con forEach:');
catalogoAmazon.forEach(function (producto) {
  console.log(producto.nombre + ' cuesta $' + producto.precio);
});
