import express from 'express';
import { userRoutes } from './routes/user.routes.js';
import 'dotenv/config';
import { error404 } from './middleware/error404.js';
import { resError } from './middleware/resError.js';

const app = express();

app.use(express.json());

// Definir las rutas aquí, por ejemplo:
app.use('/users', userRoutes());

// ------------------------------------
// Middleware para manejar errores
app.use(resError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});