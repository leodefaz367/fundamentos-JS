'use strict';

function armarPedidoAmazon(cliente, ...productosPedidos) {
  console.log('Cliente:', cliente);
  console.log('Productos del pedido:', productosPedidos);
  console.log('Cantidad:', productosPedidos.length);
}

armarPedidoAmazon('Anderson', 'Echo Dot', 'Fire TV Stick', 'Kindle Paperwhite');

let productosBase = ['Echo Dot', 'Kindle'];
let productosExtra = ['Ring Doorbell', 'Alexa Show'];
let catalogoCompleto = [...productosBase, ...productosExtra];
console.log('Catálogo completo:', catalogoCompleto);
