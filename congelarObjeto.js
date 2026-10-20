'use strict';

const guantes = {
    nombre: "RDX IMMAF",
    color: "Rojo"
};

Object.freeze(guantes);

guantes.color = "Azul";

console.log(guantes);
