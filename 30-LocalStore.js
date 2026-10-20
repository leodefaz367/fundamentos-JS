//Almacenamiento local de ciertos datos 

"use strict"; //control de errores
const gestionarProductoAPI = async () => {
    try {
        const request = await fetch('https://fakestoreapi.com/products/2');
        const json = await request.json();
        let productoCarrito = {
            titulo: json.title,
            precio: json.price,
            categoria: json.category,
            imagen: json.image
        };
        guardarLocalStorage(productoCarrito);

    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
};

const guardarLocalStorage = (data) => {
    localStorage.setItem('productoSeleccionado', JSON.stringify(data));
    console.log("Producto guardado");
};

const obtenerLocalStorage = () => {
    const respuesta = localStorage.getItem("productoSeleccionado") 
        ? JSON.parse(localStorage.getItem("productoSeleccionado")) 
        : "No hay productos en el carrito";
    
    console.log("Carro:", respuesta);
};

obtenerLocalStorage();

const eliminarLocalStorage = () => {
    if (!localStorage.getItem("productoSeleccionado")) {
        console.log("No existen producto del carrito a eliminar");
    } else {
        localStorage.removeItem("productoSeleccionado");
        console.log("Producto eliminado del carrito correctamente.");
    }
};
gestionarProductoAPI();
