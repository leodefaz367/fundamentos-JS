'use strict';
console.log(' -- Inicio de la busqueda de productos -- ');

function cargarResultadosBloqueando() {
  let suma = 0;
  for (let i = 0; i<3000000000; i++) {
    suma = suma + i;
  }
  console.log(' Resultados bloqueando (tarda mucho): ', suma);
}


cargarResultadosBloqueando();

console.log(' Fin de la busqueda (esperó al bucle)');

function cargarResultadosAsync() {
  setTimeout(function () {
    console.log(' Resultados cargados sin bloquear. Echo Dot, Kindle, Fire TV');
  }, 2000); 
}

console.log(' Antes de pedir los resultados');
cargarResultadosAsync();
console.log(' Fin del pedido (no esperó, sigue vivo) ');
