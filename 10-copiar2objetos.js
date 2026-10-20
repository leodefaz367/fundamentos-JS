const guantes = {
    marca: "RDX",
    nombre: "IMMAF"
};

const caracteristicas = {
    palma: "Abierta",
    cierre: "Doble correa"
};

const producto = {
    ...guantes,
    ...caracteristicas
};
