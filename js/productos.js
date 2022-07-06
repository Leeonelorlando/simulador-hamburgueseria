// Defino mi Array de Productos
const productos = [
    { id: 1, nombre: "Sweet Onion", precio: 1800 },
    { id: 2, nombre: "CheeseBurger", precio: 1700 },
    { id: 3, nombre: "Pesto Burger", precio: 1800 },
];

// Defino mi Array de Productos seleccionados
const productos_seleccionados = [];

// Definir la Clase Producto
class Producto {
    constructor(objeto) {
        this.id = objeto.id;
        this.nombre = objeto.nombre.toUpperCase();
        this.precio = parseFloat(objeto.precio);
        this.descuento = 20;
        this.vendido = false;
    }

    aplicarDescuento() {
        this.precio = this.precio - ((this.precio * this.descuento) / 100);
    }

    venderProducto() {
        this.vendido = true;
    }

    fueVendido() {
        return this.vendido;
    }
}

// Busca en el Array el Producto con el ID enviado por parámetro. Devuelve un Objeto con el ID
function buscarProducto(id) {
    for (let producto of productos) {
        if (producto.id == id) {
            return producto;
        }
    }

    return 0;
}

// Elimino Producto del Array de Productos
function eliminarProducto(id) {
    for (let producto of productos) {
        if (producto.id == id) {
            let produ = productos.indexOf(producto);
            productos.splice(produ, 1);
        }
    }
}