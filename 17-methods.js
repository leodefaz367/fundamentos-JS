'use strict';

let carrito = ['Echo Dot', 'Fire TV Stick'];

carrito.push('Kindle Paperwhite');
console.log('Después de push: ', carrito);

carrito.unshift('Tablet Fire HD');
console.log('Despues de unshift: ', carrito);

carrito.pop();
console.log('Despues de pop: ', carrito);

carrito.shift();
console.log('Despues de shift: ', carrito);

let productos = [
  { nombre: 'Echo Dot', precio: 50, categoria: 'Electronica', prime: true },
  { nombre: 'Kindle', precio: 139.99, categoria: 'Libros', prime: true },
  { nombre: 'Silla Gamer', precio: 199.99, categoria: 'Hogar', prime: false },
  { nombre: 'Mouse Logitech', precio: 30.00, categoria: 'Electrónica', prime: false }
];

let encontrado = productos.find(function (producto) {
  return producto.nombre === 'Kindle';
});
console.log(' Encontrado con find:', encontrado);

let indiceEncontrado = productos.findIndex(function (producto) {
  return producto.precio === 199.99;
});
console.log(' Indice con findIndex:', indiceEncontrado);

let soloPrime = productos.filter(function (producto) {
  return producto.prime === true;
});
console.log(' Solo Prime:', soloPrime);

let baratos = productos.filter(function (producto) {
  return producto.precio < 100;
});
console.log(' Menos de $100:', baratos);

let categoriaElectronica = ['Echo Dot', 'Mouse Logitech'];
let categoriaLibros = ['Kindle', 'Cien años de soledad'];
let todoElCatalogo = categoriaElectronica.concat(categoriaLibros);
console.log(' Catálogo unido:', todoElCatalogo);

console.log(' Incluye Kindle:', todoElCatalogo.includes('Kindle'));
console.log(' Algun producto es Prime:', productos.some(function (p) { return p.prime; }));
console.log(' Todos son Prime:', productos.every(function (p) { return p.prime; }));

let ordenados = [...productos].reverse();
console.log(' Reversa(copia ): ', ordenados);


let porPrecio = [...productos].sort(function (a, b) {
  return a.precio - b.precio;
});
console.log(' Ordenados por precio: ', porPrecio);


let totalProductos = productos.reduce(function (total) {
  return total + 1;
}, 0);
console.log(' Total de productos: ', totalProductos);

let subtotal = productos.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);



let totalConIva = subtotal * 1.15;
console.log(' Subtotal: $' + subtotal.toFixed(2));
console.log('  Total con IVA 15%: $' + totalConIva.toFixed(2));
