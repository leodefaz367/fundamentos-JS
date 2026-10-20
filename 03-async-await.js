'use strict';
function cargarProductosAmazon() {
  return new Promise(function (resolver) {
    setTimeout(function () {
      resolver(['Echo Dot', 'Kindle Paperwhite', 'Fire TV Stick']);
    }, 2000);
  });
}


function agregarAlCarrito(producto, hayStock) {
  return new Promise(function (resolver, rechazar) {
    setTimeout(function () {
      if (hayStock) {
        resolver(producto + ' se agrego al carrito');
      } else {
        rechazar(producto + ' no tiene stock');
      }
    }, 1500);
  });
}


async function mostrarProductos() {
  try {
    let productos = await cargarProductosAmazon();
    console.log('Productos cargados con async/await:', productos);
  } catch (error) {
    console.log('Error al cargar:', error);
  }
}


async function probarCarrito() {
  try {
    let exito = await agregarAlCarrito('Echo Dot', true);
    console.log('Exito:', exito);

    let error = await agregarAlCarrito('Kindle Paperwhite', false);
    console.log('Exito:', error);
  } catch (error) {
    console.log('Error capturado:', error);
  }
}

mostrarProductos();
probarCarrito();
