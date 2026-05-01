import express from 'express';

import { UserController } from '../controllers/user.controller.js'
import { catchError } from '../utils/catch-error.js'
import { UserLogin } from '../controllers/login.controller.js';

// Archivo que se encarga de definir las rutas relacionadas con los usuarios
export const userRoutes = () => {
    const router = express.Router();

    const userLogin = new UserLogin();
    const userController = new UserController();
    
    // /users/as

    router.get('/', catchError(userController.exampleGetUser));

    router.post('/login', userLogin.loginUser);

    return router;
};