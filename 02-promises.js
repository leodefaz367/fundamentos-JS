'use strict';

function cargarProductosAmazon() {
  return new Promise(function (resolver, rechazar) {
    setTimeout(function () {
      let productos = ['Echo Dot', 'Kindle Paperwhite', 'Fire TV Stick'];
      if (productos.length > 0) {
        resolver(productos);
      } else {
        rechazar(' No se encontraron productos');
      }
    }, 2000);
  });
}

cargarProductosAmazon()
  .then(function (productos) {
    console.log(' Productos cargados:', productos);
  })
  .catch(function (error) {
    console.log(' Error al cargar:', error);
  });

function agregarAlCarrito(producto, hayStock) {
  return new Promise(function (resolver, rechazar) {
    setTimeout(function () {
      if (hayStock) {
        resolver(producto + ' se agregó al carrito');
      } else {
        rechazar(producto + ' no tiene stock');
      }
    }, 1500);
  });
}

agregarAlCarrito('Echo Dot', true)
  .then(function (mensaje) {
    console.log(mensaje);
  })
  .catch(function (error) {
    console.log('Error:', error);
  });

agregarAlCarrito('Kindle Paperwhite', false)
  .then(function (mensaje) {
    console.log(mensaje);
  })
  .catch(function (error) {
    console.log('Error:', error);
  });

fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
  .then(respuesta => respuesta.json())
  .then(datos => console.log('Publicaciones:', datos))
  .catch(error => console.log('Error en el fetch:', error))