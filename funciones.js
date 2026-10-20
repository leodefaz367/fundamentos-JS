// Funciones: fundamentos
function mostrarProducto() {
    console.log("Guantes RDX IMMAF");
}
mostrarProducto();
// Funciones anónimas y autoejecutadas
const mostrarCaracteristica = function() {
    return "Palma abierta para facilitar el agarre";
};

console.log(mostrarCaracteristica());
// autoejecutada
(function() {
    console.log("Consultando guantes RDX");
})();

//Argumentos y parámetros
function mostrarGuantes(marca, modelo) {
    console.log(marca + " " + modelo);
}

mostrarGuantes("RDX", "IMMAF");
//Retorno de una función
function obtenerModelo() {
    return "RDX IMMAF";
}

const modelo = obtenerModelo();

console.log(modelo);
//Devuelve objeto completo
function obtenerGuantes() {
    return {
        marca: "RDX",
        modelo: "IMMAF",
        palma: "Abierta"
    };
}

console.log(obtenerGuantes());
//Funciones flecha
const mostrarModelo1 = () => {
    return "RDX IMMAF";
};

console.log(mostrarModelo1());
//Simplificada
const mostrarModelo = () => "RDX IMMAF";

console.log(mostrarModelo());