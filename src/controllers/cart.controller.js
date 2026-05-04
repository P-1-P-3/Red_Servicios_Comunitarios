// Definimos el "cerebro" del carrito
export class CartController {
    constructor() {
        // Esta lista guardará los productos mientras el servidor esté encendido
        this.items = [];
    }

    // Función para ver qué hay en el carrito
    getCart = (req, res) => {
        res.json({
            estado: "éxito",
            datos: this.items
        });
    }

    // Función para agregar un producto de prueba
    addItem = (req, res) => {
        const nuevoItem = {
            id: this.items.length + 1,
            nombre: "Servicio de ComuniApp",
            precio: 15.000
        };
        
        this.items.push(nuevoItem);
        
        res.json({
            estado: "éxito",
            mensaje: "Producto añadido correctamente",
            carritoActual: this.items
        });
    }
}