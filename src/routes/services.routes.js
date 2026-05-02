import express from 'express';
import { catchError } from '../utils/catch-error.js';
import { ServicesController } from '../controllers/services.controller.js';

// Archivo que se encarga de definir las rutas relacionadas con los servicios
export const servicesRoutes = () => {
    const router = express.Router();
    
    const serviceController = new ServicesController();
    
    router.post('/', catchError(serviceController.createService));
    router.put('/', catchError(serviceController.editService));
    router.delete('/:serviceId', catchError(serviceController.deleteService));

    return router;
};