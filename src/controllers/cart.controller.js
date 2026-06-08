// Definimos el "cerebro" del carrito
export class CartController {
    constructor() {
        // Esta lista guardará los productos mientras el servidor esté encendido
        this.items = [];
    }

    /**
     * Obtiene todos los productos o servicios agregados actualmente al carrito.
     * @param {Object} req - Objeto de solicitud de Express.
     * @param {Object} res - Objeto de respuesta de Express.
     * @returns {void} Envia una respuesta JSON con el listado de items.
     */
    getCart = (req, res) => {
        res.json({
            estado: "éxito",
            datos: this.items
        });
    };

    /**
     * Agrega un nuevo servicio de prueba al carrito de compras de ComuniApp.
     * @param {Object} req - Objeto de solicitud de Express.
     * @param {Object} res - Objeto de respuesta de Express.
     * @returns {void} Envia una respuesta JSON confirmando la adición del producto.
     */
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
    };
}