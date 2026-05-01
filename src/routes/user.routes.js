import express from 'express';
import { UserController } from '../controllers/user.controller.js'

// Archivo que se encarga de definir las rutas relacionadas con los usuarios
export const userRoutes = () => {
    const router = express.Router();
    
    const userController = new UserController();
    // /users/as
    router.get('/', userController.createUser);

    return router;
};