import express from 'express';
import { userRoutes } from './routes/user.routes.js';
import { resError } from './middleware/resError.js';
import 'dotenv/config';
import { cartRoutes } from './routes/cart.routes.js';

const app = express();

app.use(express.json());

// Definir las rutas aquí, por ejemplo:
app.use('/users', userRoutes());
app.use('/cart', cartRoutes());

// ------------------------------------
// Middleware para manejar errores
app.use(resError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});