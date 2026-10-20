let buscador = document.querySelector('#nav-search-bar-form');
let boton = document.createElement('button');
boton.innerText = 'Buscar en ofertas';
buscador.appendChild(boton);

let contenedor = document.querySelector('#nav-xshop');
let enlaceNuevo = document.createElement('a');
enlaceNuevo.textContent = 'Prime Video';
enlaceNuevo.style.color = 'blue';
contenedor.insertBefore(enlaceNuevo, contenedor.children[1]);
