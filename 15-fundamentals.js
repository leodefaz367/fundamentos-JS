'use strict';

let productosAmazon = ['Echo Dot', 'Fire TV Stick', 'Kindle Paperwhite', 'Tablet Fire HD'];

let categoriasTienda = ['Electronica', 'Hogar', 'Libros', 'Ropa'];

let preciosProductos = [50.00, 20.00, 139.00, 90.99];

let productoMixto = ['Audifonos Hayloyu', 129.99, true, 'Electronica'];

let productosDestacados = [...productosAmazon, 'Fire TV Stick', 'Alexa Show'];

console.log(' Productos:', productosAmazon);
console.log(' Categorias:', categoriasTienda);
console.log(' Precios:', preciosProductos);
console.log(' Producto mixto:', productoMixto);
console.log(' Destacados:', productosDestacados);
console.log(' Cantidad de productos:', productosAmazon.length);
console.log(' Cantidad de categorias:', categoriasTienda.length);
