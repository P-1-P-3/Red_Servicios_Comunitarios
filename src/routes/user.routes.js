import express from 'express';

import { UserController } from '../controllers/user.controller.js';
import { catchError } from '../utils/catch-error.js';
import { UserLogin } from '../controllers/login.controller.js';
import { RegisterController } from '../controllers/register.controller.js';

export const userRoutes = () => {
    const router = express.Router();

    const userLogin = new UserLogin();
    const userController = new UserController();
    const registerController = new RegisterController();



    router.get('/', catchError(userController.exampleGetUser));

    router.post('/login', userLogin.loginUser);

    router.post('/register', (req, res, next) =>
        registerController.registerUser(req, res, next)
    );

    return router;
};