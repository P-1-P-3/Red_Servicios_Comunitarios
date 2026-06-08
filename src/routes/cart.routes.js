import express from 'express';
import { CartController } from '../controllers/cart.controller.js';

// ✅ CORRECCIÓN: Se crea la instancia afuera para conservar el estado del carrito en memoria
const cartController = new CartController();

export const cartRoutes = () => {
    const router = express.Router();

    /**
     * @swagger
     * /cart:
     * get:
     * summary: Obtener el contenido del carrito
     * description: Devuelve una lista con todos los servicios o productos agregados actualmente al carrito.
     * responses:
     * 200:
     * description: Operación exitosa. Devuelve los elementos del carrito.
     */
    // RUTA para ver el carrito (localhost:8080/cart)
    router.get('/', cartController.getCart);

    /**
     * @swagger
     * /cart/add:
     * get:
     * summary: Agregar producto de prueba al carrito
     * description: Añade un servicio genérico de ComuniApp al carrito de compras local.
     * responses:
     * 200:
     * description: Producto añadido correctamente.
     */
    // RUTA para agregar producto de prueba (localhost:8080/cart/add)
    router.get('/add', cartController.addItem);

    return router;
};