'use strict';

let productoAmazon = ['Echo Dot', 49.99, 'Electrónica', true];

let [nombreProducto, precioProducto, categoriaProducto] = productoAmazon;
console.log(nombreProducto, precioProducto, categoriaProducto);

let [, , categoriaSaltando] = productoAmazon;
console.log('Categoría saltando valores:', categoriaSaltando);

let pedidoAmazon = [
  'Orden #1001',
  ['Echo Dot', 'Fire TV Stick', 'Kindle']
];
let [numeroOrden, [primerItem, segundoItem]] = pedidoAmazon;
console.log('Orden:', numeroOrden);
console.log('Primer ítem:', primerItem);
console.log('Segundo ítem:', segundoItem);
