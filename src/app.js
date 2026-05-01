import express from 'express';
import { userRoutes } from './routes/user.routes.js';
import { resError } from './middleware/resError.js';
import 'dotenv/config';

const app = express();

app.use(express.json());

// Definir las rutas aquí, por ejemplo:
app.use('/users', userRoutes());

<<<<<<< HEAD
// ------------------------------------
// Middleware para manejar errores
app.use(resError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
=======
app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
>>>>>>> Nicolas
});