/* SIMULADOR DE UNA HAMBURGUESERIA */

function solicarNombre() {
    alert("Bienvenido a Burger+");
    let nombre = prompt("Ingrese su nombre");
    alert("Bienvenido " + nombre);

    while (nombre === "") {
        nombre = prompt("Ingrese su nombre");
    }
    return nombre;
}

function mostrarProductos() {
    let producto;
    do {
        producto = parseInt(
            prompt("Que tipo de hamburguesa quiere llevar? \n1) Sweet Onion Doble + Papas Fritas (Medallon x2 Cheddar Fetas x4 Bacon Cebolla Caramelizada)\n2) Cheese Burger Doble + Papas Fritas (Medallon x2 Cheddar x4)\n3) Pesto Burger (Medallon x 2 + Cheddar fetas x 4 + Tomate + Pesto + Alioli + Papas fritas")
        );
    } while (producto !== 1 && producto !== 2 && producto !== 3);

    switch (producto) {
        case 1:
            return "Fried Onion";
        case 2:
            return "Cheese Burger Doble";
        case 3:
            return "Pesto Burger";
    }
}

function validarPrecio(nombre) {
    if (nombre === "Sweet Onion") {
        return 1350;
    } else if (nombre === "Cheese Burger Doble") {
        return 1200;
    } else {
        return 1250;
    }
}

let total = 0;
let texto = "";

function cobrar(producto, precio, nombre) {
    alert(
        nombre.toUpperCase() +
        ", usted lleva el siguiente producto: " +
        producto +
        " y su precio es de: $" +
        precio
    );

    alert("Se agrego: " + productoNombre);
    texto += "Producto " + productoNombre + "- Precio : " + "$" + precio + "\n";
    total += precio;

    let seguir = confirm("Desea agregar algo mas? (En caso de que no, toca CANCELAR)");
    if (seguir) {
        productoNombre = mostrarProductos();
        precio = validarPrecio(productoNombre);
        cobrar(productoNombre, precio, nombreCliente);
    } else {
        alert("Carrito :\n" + texto + "\n TOTAL: $" + total + "\n");
        let pago = parseInt(prompt("Con cuanto paga? "));
        if (pago > total) {
            alert("Muchas gracias ! Su vuelto es : $" + (pago - total) + ", en breves le entregamos el pedido.");
        } else {
            alert("No le alcanza, vuelva pronto! ");
        }
    }
}

let nombreCliente = solicarNombre();
let productoNombre = mostrarProductos();
let precio = validarPrecio(productoNombre);
cobrar(productoNombre, precio, nombreCliente);