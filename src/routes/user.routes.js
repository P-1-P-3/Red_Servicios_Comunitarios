import express from 'express';
import { UserLogin } from '../controllers/login.controller.js';

// Archivo que se encarga de definir las rutas relacionadas con los usuarios
export const userRoutes = () => {
    const router = express.Router();

    const userLogin = new UserLogin();
    
    // /users/as
    router.post('/login', userLogin.loginUser);


    return router;
};