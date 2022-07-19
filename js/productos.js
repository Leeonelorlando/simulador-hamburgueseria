const productos = [{
        nombre: "Cheese Baby",
        descripcion: "Pan de papa, carne smash 110g, cheddar x2, cebolla, salsa baby",
        id: 1,
        precio: 1000,
        imagen: "img/BACON BABY HAMBURGUESA.png",
    },
    {
        nombre: "Bacon Baby",
        descripcion: "Pan de papa, carne smash 110g, cheddar x2, bacon x4",
        id: 2,
        precio: 1100,
        imagen: "img/BACON BABY HAMBURGUESA.png",
    },
    {
        nombre: "Onion Baby",
        descripcion: "Pan de papa, carne smash fried onion 110g, cheddar x4",
        id: 3,
        precio: 1200,
        imagen: "img/BACON BABY HAMBURGUESA.png",
    },
    {
        nombre: "Quarter Baby",
        descripcion: "Pan de papa, carne smash 110g, cheddar x2, salsa quarter, cebolla en cubos",
        id: 4,
        precio: 1300,
        imagen: "img/BACON BABY HAMBURGUESA.png",
    },
    {
        nombre: "Smash Baby",
        descripcion: "Pan de papa, doble carne smash 110g, cheddar x2, cebolla en cubos, salsa baby",
        id: 5,
        precio: 1400,
        imagen: "img/BACON BABY HAMBURGUESA.png",
    },
    {
        nombre: "Mush Baby",
        descripcion: "Pan Brioche, carne smash, emmenthal x2, salsa blue, champiñones, bacon",
        id: 6,
        precio: 1500,
        imagen: "img/BACON BABY HAMBURGUESA.png",
    }
]

//// Funciones ////////////////

/// Funciones LocalStorage

function obtenerProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos))
}

function obtenerProductosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos))
}