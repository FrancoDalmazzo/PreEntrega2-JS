const productos = [
    { nombre: "Morron", precio: 500 },
    { nombre: "Lechuga", precio: 50 },
    { nombre: "Papa", precio: 250 },
    { nombre: "Zapallo", precio: 1000 },
    { nombre: "Cebolla", precio: 300 },
    { nombre: "Tomate", precio: 600 },
    { nombre: "Manzana", precio: 400 },
    { nombre: "Banana", precio: 300 },
    { nombre: "Durazno", precio: 650 },
    { nombre: "Pera", precio: 950 },
];

const btnCompra = document.getElementById("compra-boton");
const divResCompra = document.getElementById("resultado");

const ACEPTAR_D = "Presione 'Aceptar' para sumar productos al carrito.";
const CANCELAR_D = "Presione 'Cancelar' para finalizar la compra.";

function comprar() {
    const seleccion = prompt(
        ACEPTAR_D + "\n" +
        CANCELAR_D + "\n" +
        "Seleccione un producto:\n" +
        productos.map((producto, index) => `(${index + 1}) ${producto.nombre}`).join("\n"));

    if (seleccion !== null) {
        const indexProducto = parseInt(seleccion) - 1;

        if (indexProducto >= 0 && indexProducto < productos.length) {
            const precioProducto = productos[indexProducto].precio;
            return precioProducto + comprar();
        } else {
            alert("Selección inválida. Por favor, elija un número válido.");
            return comprar();
        }
    }

    return 0;
}

function mostrarResultado(total) {
    divResCompra.textContent = `El total de su compra es: $${total.toFixed(2)}, gracias por elegirnos!😁👍`;
}

btnCompra.addEventListener("click", () => {
    const totalCompra = comprar();
    mostrarResultado(totalCompra);
});
