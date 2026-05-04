import express from 'express';

import { CartController } from '../controllers/cart.controller.js';

export const cartRoutes = () => {
    const router = express.Router();
    
    // Herramienta para usar las funciones
    const cartController = new CartController();

    // RUTA para ver el carrito (localhost:8080/cart)
    router.get('/', cartController.getCart);
    
    // RUTA para agregar producto de prueba (localhost:8080/cart/add)
    router.get('/add', cartController.addItem);

    return router;
};