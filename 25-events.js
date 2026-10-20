let buscador = document.querySelector('#nav-search-bar-form');

buscador.addEventListener('mouseenter', function () {
  buscador.style.border = '5px solid green';
});

buscador.addEventListener('mouseout', function () {
  buscador.style.border = '';
});

let boton = document.createElement('button');
boton.innerText = 'Buscar';
buscador.appendChild(boton);

boton.addEventListener('click', function () {
  alert('Buscando en Amazon');
});

let campo = document.querySelector('#twotabsearchtextbox');

campo.addEventListener('input', function (e) {
  if (e.target.value === '') {
    campo.style.border = '5px solid red';
  } else {
    campo.style.border = '';
    console.log(e.target.value);
  }
});

campo.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    console.log('enviando la búsqueda');
  }
});

buscador.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('enviando el formulario');
});
