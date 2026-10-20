"use strict";

import resumen, { productoAmazon, calcularAhorro } from './module.js';

console.log("DESCUENTOS");

console.log(resumen(productoAmazon));

const ahorro = calcularAhorro(productoAmazon.precioOriginal, productoAmazon.precioActual);
console.log(`Ahorro total: $${ahorro}!`);

console.log("Tallas que puedes elegir:");
productoAmazon.tallasDisponibles.forEach(talla => {
    console.log(`Talla: ${talla}`);
});
